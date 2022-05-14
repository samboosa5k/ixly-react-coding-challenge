import { ReactNode } from 'react';

declare global {
  interface IChildProps {
    children?: ReactNode;
  }
  enum EColor {
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    danger = 'danger',
    warning = 'warning',
    info = 'info',
    light = 'light',
    dark = 'dark'
  }
}
// export interface IChildProps {
//   children: ReactNode;
// }
