import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
