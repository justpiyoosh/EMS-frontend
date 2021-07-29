import {
  Switch,
  Route
} from "react-router-dom";
import BaseContainer from "../Containers/BaseContainer";
import Home from "../Containers/Home";
import SignUp from "../Containers/SignUp";
import ProtectedRoute from "./ProtectedRoute";

function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={BaseContainer} />
        <Route exact path="/sign-up" component={SignUp} />
        <ProtectedRoute path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default Router;

