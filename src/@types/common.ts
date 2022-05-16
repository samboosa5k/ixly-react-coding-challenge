import { ReactNode } from 'react';

declare global {
  // This is a basic prop for wrappers
  interface IChildProps {
    children?: ReactNode;
  }
  // The basic image props that are sent around  after
  // the fetch has fitlered
  type ImageProps = {
    id: string;
    src: string;
    alt: string;
  };
}
