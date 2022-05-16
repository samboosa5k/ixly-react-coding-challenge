import React, { memo } from 'react';
import { useAppState } from '../../context/AppContext';
import { AppStateActions } from '../../context/AppStateActions';
import { isDefined } from '../../utils/validation';
import Image from '../Image';
import { ResponsiveGrid } from './Grid.style';
import { GridItem } from './GridItem';

type MappedGridItemProps = {
  gridData: ImageProps[];
  handleClick: (arg: ImageProps) => void;
};
const MappedGridItems = memo(function MappedGridItems({
  gridData,
  handleClick
}: MappedGridItemProps) {
  if (!isDefined(gridData)) {
    return <GridItem key={`empty_test`}>No data loaded</GridItem>;
  } else {
    return (
      <>
        {gridData.map((imgObj: ImageProps, idx: number) => (
          <GridItem key={`${idx}_test`}>
            <Image
              onClick={() => handleClick(imgObj)}
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
});

/**
 * Grid component
 * @param {IChildProps} props
 * @param {children} props.children - e.g. photo tiles which will be layed out in a grid
 */
export const Grid = () => {
  const { appState, dispatch } = useAppState();

  const handlePhotoClick = (arg: ImageProps) => {
    dispatch({ type: AppStateActions.TOGGLE_MODAL, payload: arg });
  };

  return (
    <ResponsiveGrid>
      <MappedGridItems gridData={appState.api.dataList} handleClick={handlePhotoClick} />
    </ResponsiveGrid>
  );
};
