/**
 * Function to just filter out the data for imges
 * @param imageObjArr - json array that comes directly from Unsplash
 */

const reduceUnsplashImageObj = (imageObjArr: IUnsplashImageObj[]) => {
  return imageObjArr.map((imageObj: IUnsplashImageObj) => {
    return {
      id: imageObj.id,
      src: imageObj.urls.regular,
      alt: imageObj.alt_description
    };
  });
};

/**
 * Function *set* and *get* responses/filtered data
 * so that you don't have to keep fetching the API (free users have limits)
 * @param imageObjArr - json array that comes directly from Unsplash
 */

interface ISessionFetchProps {
  page: number;
  cleanImgObjArr: ImageProps[];
}

const getSessionStorage = ({ page }: Partial<ISessionFetchProps>): ImageProps[] => {
  const sessionStorage = window.sessionStorage.getItem(`page_${page}`);
  if (!sessionStorage) {
    return [];
  } else {
    return JSON.parse(sessionStorage);
  }
};

/**
 * Function to set the sessionStorage
 * @param imageObjArr - filtered array of image data coming from Unsplash using
 *   {@function reduceUnsplashImageObj}
 *
 * @param {number} page - the current page or nr. of time's we've fetched the data
 *
 * @param {ImageProps[]} cleanImgObjArr - the filtered array of image data
 */
const setSessionStorage = ({ page, cleanImgObjArr }: ISessionFetchProps) => {
  const existingSessionStorage = getSessionStorage({ page: page });

  const isNewData = JSON.stringify(cleanImgObjArr) !== JSON.stringify(existingSessionStorage);
  if (!isNewData) {
    return;
  } else {
    console.log(`page_${page}`, 'set new session storage');
    window.sessionStorage.setItem(
      `page_${page}`,
      JSON.stringify([...existingSessionStorage, ...cleanImgObjArr])
    );
  }
};

export {
  reduceUnsplashImageObj as default,
  reduceUnsplashImageObj,
  getSessionStorage,
  setSessionStorage
};
