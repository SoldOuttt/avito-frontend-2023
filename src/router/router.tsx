import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { GamePage } from '../pages/GamePage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={'/'} element={<HomePage/>}/>
      <Route path={'/*'} element={<GamePage/>}/>
    </Route>,
  ),
);