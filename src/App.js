import Nav from './components/Nav';
import SubHeader from './components/SubHeader';
import Countries from './components/Countries';
import CountryDetail from "./components/CountryDetail";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return(
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App;
