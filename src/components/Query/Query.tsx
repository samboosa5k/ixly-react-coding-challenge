import { useCallback, useEffect, useMemo, useState } from 'react';
import { QueryProps } from './types';
import { reduceUnsplashImageObj } from './utils';
import fetchtest from './fetch_test.json';

export const Query = ({ children, query }: QueryProps) => {
  const [queryResponse, setQueryResponse] = useState<{ data: []; error: null }>(
    { data: [], error: null }
  );

  const filteredResponse = useMemo(() => {
    if (queryResponse.data.length > 0)
      return reduceUnsplashImageObj(queryResponse.data);
    return queryResponse.data;
  }, [queryResponse.data]);

  /// THIS IS TEMP
  useEffect(() => {
    const results = JSON.parse(JSON.stringify(fetchtest.results));
    setQueryResponse({ data: results, error: null });
    console.log(fetchtest.results);
  }, [fetchtest.results]);

  /// ACTVATE AFTER

  // const result = useCallback(async () => {
  //   try {
  //     const response = await fetch(
  //       `https://api.unsplash.com/search/photos?page=${1}&per_page=${12}&query=fastfood&client_id=WQjDDCPBDixElpsgYDvGCNqsgHlxPtY63HICRmOrOsk`
  //     );
  //     const dataList = await response.json();
  //     setQueryResponse({ data: dataList.results, error: null });
  //   } catch (error) {
  //     setQueryResponse({ ...queryResponse, error: error });
  //   }
  // }, []);
  //
  // useEffect(() => {
  //   result().then(() => {
  //     console.log(queryResponse);
  //   });
  // }, [result]);

  return <>{children({ ...queryResponse, data: filteredResponse })}</>;
};
