import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home';
import { SignIn } from '../pages/signIn';
import { AppLayout } from '@/pages/_layouts/app';
import { AuthLayout } from '@/pages/_layouts/auth';
import { SignUp } from '@/pages/signup';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{
      path: '/', element: <Home />,
    }]
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in', element: <SignIn />
      },
      {
        path: '/sign-up', element: <SignUp />
      }
    ]

  },
]);
