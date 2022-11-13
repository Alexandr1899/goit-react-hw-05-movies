import { Layout } from "pages/Layout";
import { lazy } from "react";
import { Routes, Route } from "react-router";
import {HomePage} from "./home/HomePage"
import { MoviesPage } from "./movies/Movies";

const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'))
const Cast = lazy(() => import('./MovieDetails/Cast'))
const Review = lazy(() => import('./MovieDetails/Review'))

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <HomePage />}/>
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
