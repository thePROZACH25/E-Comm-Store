import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Checkout from "./components/Checkout";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
