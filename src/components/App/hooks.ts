import { useEffect, useState } from 'react';
import reduceUnsplashImageObj, { setSessionStorage } from './utils';
import testjson from './fetch_test.json';

export const useQuery = () => {
  const [queryResponse, setQueryResponse] = useState<{ data: ImageProps[]; error: string }>({
    data: [],
    error: ''
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?page=${1}&per_page=${12}&query=fastfood&client_id=WQjDDCPBDixElpsgYDvGCNqsgHlxPtY63HICRmOrOsk`
        );
        // const response = JSON.stringify(testjson['results']);
        if (response.ok) {
          const json = await response.json();
          const reducedImages = json.results.map(reduceUnsplashImageObj);
          setQueryResponse({ data: reducedImages, error: null });
          setSessionStorage(reducedImages);
        } else {
          setQueryResponse({ data: [], error: response.statusText });
        }
        // const dataList = await response.json();
        // const processedData = await reduceUnsplashImageObj(JSON.parse(response));
        // setSessionStorage({ page: 1, imgObjArr: processedData });
        // return processedData;
      } catch (error) {
        console.error('fetchUnsplashImages error: ', error);
      }
    };
  }, []);

  return { data: queryResponse.data, error: queryResponse.error };
};
