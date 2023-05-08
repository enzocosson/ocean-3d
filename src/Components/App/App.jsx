import React from "react";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../Views/Home/Home";
import Content from "../../Views/Content/Content";
import Contact from "../../Views/Contact/Contact";
import Login from "../../Views/Login/Login";
import Signup from "../../Views/Signup/Signup";
import "./App.module.scss";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Content" component={Content} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
