import { useRef } from 'react';
import ISessionFetchProps from './utils';

/**
 * Function *set* and *get* responses/filtered data
 * so that you don't have to keep fetching the API (free users have limits)
 * @param imageObjArr - json array that comes directly from Unsplash
 */

interface ISessionFetchProps {
  page: number;
  imgAttrArr?: ImageProps[];
}

const useFetchLocalStorage = () => {
  // const currentPageData = useRef<ImageProps[]>([]);

  const getSessionStorage = ({ page }: ISessionFetchProps): ImageProps[] => {
    const sessionStorage = window.sessionStorage.getItem(`page_${page}`);
    // if (!sessionStorage) {
    //   currentPageData.current = [];
    // } else {
    //   currentPageData.current = JSON.parse(sessionStorage);
    // }
    return JSON.parse(sessionStorage);
  }; // end getSessionStorage

  const setSessionStorage = ({ page, imgAttrArr }: ISessionFetchProps) => {
    const existingSessionStorage = getSessionStorage({ page: page });
    const isNewData = JSON.stringify(imgAttrArr) !== JSON.stringify(existingSessionStorage);
    if (!isNewData) {
      return;
    } else {
      console.log('setSessionStorage', page, imgAttrArr);
      window.sessionStorage.setItem(`page_${page}`, JSON.stringify(imgAttrArr));
    }
  }; // end setSessionStorage

  // useEffect(() => {
  //   const existingSessionStorage = getSessionStorage({ page });
  //   if (existingSessionStorage.length === 0) {
  //     currentPageData.current = [];
  //   } else {
  //     currentPageData.current = existingSessionStorage;
  //   }
  // }, [page]); // end useEffect

  return {
    // sessionData: currentPageData,
    getSessionData: getSessionStorage,
    setSessionData: setSessionStorage
  };
};

export default useFetchLocalStorage;
