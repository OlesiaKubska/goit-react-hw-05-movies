import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import Header from './Header/Header';
import Loader from './Loader/Loader';
import { AppContainer } from './App.styled';
import { GlobalStyle } from 'GlobalStyle';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <GlobalStyle />
    </AppContainer>
  );
}

export default App;