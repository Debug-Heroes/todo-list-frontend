import { RouterProvider } from 'react-router-dom';
import { router } from './router';

export const Router = () => {
  return <RouterProvider router={router} />;
};
