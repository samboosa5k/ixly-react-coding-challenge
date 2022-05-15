import { ReactNode } from 'react';

export type GridImageType = {
  id: string;
  src: string;
  alt: string;
};

export interface IGridProps {
  loadedData: GridImageType[]; // cannot infer type of unsplash.com API response
}
