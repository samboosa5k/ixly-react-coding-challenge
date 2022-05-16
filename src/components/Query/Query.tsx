import { useEffect } from 'react';
import { useAppState } from '../../context/AppContext';
import { AppStateActions } from '../../context/AppStateActions';
import { getSessionStorage, reduceUnsplashImageObj, setSessionStorage } from '../../utils';
import { QueryProps } from './types';

export const Query = ({ children, page, apiKey }: QueryProps) => {
  const { appState, dispatch } = useAppState();

  // Changing query string for the API call
  const URL = `https://api.unsplash.com/search/photos?page=${page}&per_page=${12}&query=fastfood&client_id=WQjDDCPBDixElpsgYDvGCNqsgHlxPtY63HICRmOrOsk`;
  // Each time a new fetch is made it's stored in the sessionStorage as a 'page'
  const sessionStorage = getSessionStorage({ page: page });

  // Pushes the session storage image array from {@const sessionStorage} to the appState
  const loadFromSession = () => {
    dispatch({ type: AppStateActions.LOAD_SESSION_DATA, payload: sessionStorage });
    console.log('loaded from session storage');
  };

  // Pushes the fetched image array to the appState
  // ONLY is called when @{function fetchImages} is called
  const loadFromFetch = (reducedImages: ImageProps[]) => {
    setSessionStorage({ page: page, cleanImgObjArr: reducedImages });
    dispatch({
      type: AppStateActions.LOAD_IMAGE_FETCH_DATA,
      payload: reducedImages
    });
  };

  const fetchImages = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const json = await response.json();
        const results = json.results;
        const reducedImages = reduceUnsplashImageObj(results);
        loadFromFetch(reducedImages);
      } else {
        console.log('error', response.statusText);
      }
    } catch (error) {
      console.error('fetchUnsplashImages error: ', error);
    }
  };

  // The logic for loading or fetching
  useEffect(() => {
    if (!appState.init) {
      return;
    }
    if (!sessionStorage) {
      fetchImages();
    } else if (sessionStorage && sessionStorage.length > 0) {
      loadFromSession();
    } else {
      fetchImages();
    }
  }, [appState.init, page]);

  return <>{children}</>;
};
