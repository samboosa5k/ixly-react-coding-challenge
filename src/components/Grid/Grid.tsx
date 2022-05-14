import React, { Suspense, useEffect, useState, useTransition } from 'react';
import { StyledGrid } from './Grid.style';
import { GridItem } from './GridItem';
import { IGridProps } from './types';

const GridItems = (props: IGridProps) => {
  return (
    <>
      {props && props.urls
        ? props.urls.map((_: string, i: number) => (
            <GridItem key={`${i}_test`}>Test</GridItem>
          ))
        : null}
    </>
  );
};

/**
 * Grid component
 * @param {IChildProps} props
 * @param {children} props.children - e.g. photo tiles which will be layed out in a grid
 */
export const Grid = (props: IGridProps) => {
  const [isPending, startTransition] = useTransition();
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    startTransition(() => {
      setItems(props.urls);
    });
  }, [props.urls]);

  return (
    <Suspense fallback={<h3>Loading</h3>}>
      <StyledGrid>
        {props.children}
        {isPending ? (
          <GridItem>loading</GridItem>
        ) : (
          <GridItems urls={props.urls} />
        )}
      </StyledGrid>
    </Suspense>
  );
};
