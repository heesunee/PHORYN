import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/home';
import Intro from '@pages/intro';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/intro', element: <Intro /> },
])
