import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/home';
import Intro from '@pages/intro';
import NameInput from '@pages/name-input';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/intro', element: <Intro /> },
  { path: '/name-input', element: <NameInput/>}
])
