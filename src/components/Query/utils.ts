/**
 * Fetch function
 */

const fetchQuery = async (pagenr: number, apiKey: string) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=${pagenr}&query=fastfood&client_id=${apiKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
  // }
};

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
  imgAttrArr?: IUnsplashImageObj[];
}

const getSessionStorage = ({ page }: ISessionFetchProps): ImageProps[] => {
  const sessionStorage = window.sessionStorage.getItem(`page_${page}`);
  if (!sessionStorage) {
    return [];
  } else {
    return JSON.parse(sessionStorage);
  }
};

const setSessionStorage = ({ page, imgAttrArr }: ISessionFetchProps) => {
  const existingSessionStorage = getSessionStorage({ page: 1 });

  const isNewData = JSON.stringify(imgAttrArr) !== JSON.stringify(existingSessionStorage);
  if (!isNewData) {
    return;
  } else {
    window.sessionStorage.setItem(
      `page_${page}`,
      JSON.stringify([...existingSessionStorage, ...imgAttrArr])
    );
  }
};

export { reduceUnsplashImageObj as default, getSessionStorage, setSessionStorage, fetchQuery };