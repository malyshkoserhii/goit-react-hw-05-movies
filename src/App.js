import { Route, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import Homepage from './views/Homepage/Homepage';
import MoviesPage from './views/MoviesPage/MoviesPage';
import MovieDetailsView from './views/MovieDetailsView/MovieDetailsView';
import NotFoundView from './views/NotFoundView/NotFoundView';

const App = () => {
  return (
    <>
      <Container>
        <AppBar />
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

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default App;
