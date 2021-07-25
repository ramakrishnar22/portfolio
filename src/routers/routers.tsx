import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard } from "../components/Dashboard/Dashboard";

function Routers(){
    return (
        <BrowserRouter>
     <Switch>
     <Route exact path="/">
        <Dashboard/>
      </Route>
     <Route path="/list">

     </Route>
     <Route path="/about">

     </Route>
     </Switch>
     </BrowserRouter>
    )
}

export { Routers };