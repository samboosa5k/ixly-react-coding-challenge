/**
 * THe props for this component can be better typed
 * easily, but I will have to read through the documentation
 * a bit more.
 */ import { ReactNode } from 'react';

export type QueryProps = {
  query?: string;
  page?: number;
  apiKey: string;
  children?: ({ data, error }: { data: any[]; error: null | Record<string, unknown> }) => ReactNode;
};
