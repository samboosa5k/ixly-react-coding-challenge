import { useEffect } from 'react';
import { useAppState } from '../../context/AppContext';
import { AppStateActions } from '../../context/AppStateActions';
import { QueryProps } from './types';
import { getSessionStorage, reduceUnsplashImageObj, setSessionStorage } from './utils';

export const Query = ({ children, page, apiKey }: QueryProps) => {
  const { appState, dispatch } = useAppState();

  const URL = `https://api.unsplash.com/search/photos?page=${page}&per_page=${12}&query=fastfood&client_id=WQjDDCPBDixElpsgYDvGCNqsgHlxPtY63HICRmOrOsk`;
  const sessionStorage = getSessionStorage({ page: page });

  const loadFromSession = () => {
    dispatch({ type: AppStateActions.LOAD_SESSION_DATA, payload: sessionStorage });
    console.log('loaded from session storage');
  };

  const loadFromFetch = (reducedImages: ImageProps[]) => {
    setSessionStorage({ page: page, imgObjArr: reducedImages });
    dispatch({ type: AppStateActions.LOAD_SESSION_DATA, payload: reducedImages });
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

  useEffect(() => {
    if (!appState.init) {
      return;
    }
    if (sessionStorage && sessionStorage.length) {
      loadFromSession();
    } else {
      fetchImages();
    }
  }, [appState.init, page]);

  return <>{children}</>;
};
