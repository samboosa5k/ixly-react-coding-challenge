import { ReactNode, ReactPortal } from 'react';

declare global {
  interface IChildProps {
    children?: ReactNode;
  }

  type ImageProps = {
    id: string;
    src: string;
    alt: string;
  };
}
