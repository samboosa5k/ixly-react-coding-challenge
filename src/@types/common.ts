import { ReactNode } from 'react';

declare global {
  interface IChildProps {
    children?: ReactNode;
  }
}
// export interface IChildProps {
//   children: ReactNode;
// }
