import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import BMI from "./components/pages/BMIApps/BMI";
import CatAge from "./components/pages/CatAgeConversion/CatAgeConversion";
import TextTransform from "./components/pages/TextTransformApp/TextTransform";
import NotMatch from "./components/pages/NotMatch/NotMatch";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <BMI />
          </Route>

          <Route exact path="/catconversion">
            <CatAge />
          </Route>

          <Route exact path="/texttransform">
            <TextTransform />
          </Route>

          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
