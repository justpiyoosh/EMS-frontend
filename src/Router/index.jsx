import {
  Switch,
  Route
} from "react-router-dom";
import BaseContainer from "../Containers/BaseContainer";
import Home from "../Containers/Home";
import SignUp from "../Containers/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import SearchResult from "../Containers/SearchResult";
import UserDetailPage from "../Containers/UserDetailPage";

function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={BaseContainer} />
        <Route exact path="/sign-up" component={SignUp} />

        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/search-research=:searchVal" component={SearchResult} />
        <ProtectedRoute exact path="/username=:username" component={UserDetailPage} />
      </Switch>
    </div>
  );
}

export default Router;
