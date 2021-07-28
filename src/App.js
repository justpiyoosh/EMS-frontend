import {
  Switch,
  Route
} from "react-router-dom";
import BaseContainer from "./Containers/BaseContainer";
import SignUp from "./Containers/SignUp";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={BaseContainer}/>
        <Route exact path="/signup" component={SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
