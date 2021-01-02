import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Nav from './components/Nav';
import Main from './pages/Main';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Nav/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
