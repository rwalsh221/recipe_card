import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './app/App';
import Test from './app/pages/Test/Test';
import RecipeCardPage from './app/pages/RecipeCard/RecipeCardPage';
import './assets/css/reset.css';
import './assets/css/variable.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />}></Route>
        <Route path={'/test'} element={<Test />}></Route>
        <Route path={'/recipe-card'} element={<RecipeCardPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
