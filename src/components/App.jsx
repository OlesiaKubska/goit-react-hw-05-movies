import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/movies" element={Movies} />
        <Route path="/movies/:movieId" element={MovieDetails} />
          <Route path="/movies/:movieId/cast" element={Cast} />
          <Route path="/movies/:movieId/reviews" element={Reviews} />
      </Routes>
    </>
  );
}

export default App;