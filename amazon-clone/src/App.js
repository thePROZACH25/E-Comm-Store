import "./App.css";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <h1>I am a checkout page!!!</h1>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
