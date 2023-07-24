import React from "react";
import Header from "./Commponents/Header/Header";
import Main from "./Commponents/Main/Main";
import Statistic from "./Commponents/Statistic/Statistic";
import { Route } from 'react-router-dom'

function App() {

  return <React.Fragment>
    <Header />
    <Route path={'/home'}>
      <Main />
    </Route>
    <Route path={'/statistic'}>
      <Statistic />
    </Route>
  </React.Fragment>
}

export default App;