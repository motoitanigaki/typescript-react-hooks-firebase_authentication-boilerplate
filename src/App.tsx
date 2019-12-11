import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from "./pages/Auth";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </AuthProvider>
      </Switch>
    </Router>
  );
};

export default App;
