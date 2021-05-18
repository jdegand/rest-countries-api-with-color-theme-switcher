import Nav from './components/Nav';
import SubHeader from './components/SubHeader';
import Countries from './components/Countries';
import CountryDetail from "./components/CountryDetail";
import {HashRouter, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return(
    <HashRouter>
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <SubHeader />
          <Countries />
        </Route>
        <Route path="/countries/:name" children={<CountryDetail />} />
      </Switch>
    </>
    </HashRouter>
  )
}

export default App;
