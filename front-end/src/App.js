import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
//import PrivateRoute from "./Routes/PrivateRoutes";
import GamingPage from "./Views/GamingPage";
import LandingPage from "./Views/LandingPage";
import Sender from "./Views/Sender";
import Room from "./Views/Room";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact component={GamingPage} path="/game" />
          <Route exact component={LandingPage} path="/" />
          <Route exact component={Room} path="/room" />
          <Route exact component={Sender} path="/sender" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
