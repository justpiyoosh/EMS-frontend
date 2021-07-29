import {
    Switch,
    Route
  } from "react-router-dom";
  import BaseContainer from "../Containers/BaseContainer";
  import Home from "../Containers/Home";
  import SignUp from "../Containers/SignUp";
  
  function Router() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={BaseContainer} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
  
  export default Router;
  
