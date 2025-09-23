import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/home';
import Intro from '@pages/intro';
import NameInput from '@pages/name-input';
import { ROUTES } from '@routes/routes-config';
import Survey from '@pages/survey';

export const router = createBrowserRouter([
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.INTRO, element: <Intro /> },
  { path: ROUTES.NAME_INPUT, element: <NameInput /> },
  { path: ROUTES.SURVEY, element: <Survey/>}
]);
