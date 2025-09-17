import { createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/start',
        element: <Home />,
      },
    ],
  },
]);
