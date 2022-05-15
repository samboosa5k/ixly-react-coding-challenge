import React, { useEffect, useState, useTransition } from 'react';
import { isDefined } from '../../utils/validation';
import Image from '../Image';
import { ResponsiveGrid } from './Grid.style';
import { GridItem } from './GridItem';
import { GridImageType, IGridProps } from './types';

type MappedGridItemProps = { gridData: GridImageType[] };
const MappedGridItems = (props: MappedGridItemProps) => {
  const { gridData } = props;
  useEffect(() => {
    console.log('GridItems rendered', gridData);
  }, [gridData]);

  if (!isDefined(gridData)) {
    return null;
  } else {
    return (
      <>
        {gridData.map((imgObj: GridImageType, idx: number) => (
          <GridItem key={`${idx}_test`}>
            <Image
              id={imgObj.id}
              src={imgObj?.src}
              alt={imgObj.alt}
              decoding="async"
              loading="lazy"
            />
          </GridItem>
        ))}
      </>
    );
  }
};
/**
 * Grid component
 * @param {IChildProps} props
 * @param {children} props.children - e.g. photo tiles which will be layed out in a grid
 */
export const Grid = ({ loadedData }: IGridProps) => {
  const [isPending, startTransition] = useTransition();
  const [loaded, setLoaded] = useState<GridImageType[]>([]);

  useEffect(() => {
    startTransition(() => {
      setLoaded(loadedData);
    });
  }, [loadedData]);

  return (
    <ResponsiveGrid>
      {isPending && <div>Loading...</div>}
      <MappedGridItems gridData={loaded} />
    </ResponsiveGrid>
  );
};
