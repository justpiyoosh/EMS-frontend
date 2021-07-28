import {
  Switch,
  Route
} from "react-router-dom";
import BaseContainer from "./Containers/BaseContainer";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={BaseContainer}/>
      </Switch>
    </div>
  );
}

export default App;
