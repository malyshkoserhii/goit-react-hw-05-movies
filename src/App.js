import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Homepage from './views/Homepage/Homepage';
import Movies from './views/MoviesPage/MoviesPage';
import NotFoundView from './views/NotFoundView/NotFoundView';

const App = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </>
  );
};

export default App;
