import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Fallback from './components/Fallback/Fallback';
import AppBar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer';

const Homepage = lazy(() =>
  import(
    './views/Homepage/Homepage.js' /* webpackChunkName: "homepage-view" */
  ),
);
const MoviesPage = lazy(() =>
  import(
    './views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page-view" */
  ),
);
const MovieDetailsView = lazy(() =>
  import(
    './views/MovieDetailsView/MovieDetailsView' /* webpackChunkName: "movie-details-view" */
  ),
);
const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView/NotFoundView' /* webpackChunkName: "not-found-view" */
  ),
);

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Fallback />}>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>

          <Route path="/:movieId">
            <MovieDetailsView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
