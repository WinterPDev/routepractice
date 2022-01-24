import './App.css';
import {
  BrowserRouter, 
  Link,
  Switch,
  Route
} from "react-router-dom";
import Param from './components/Param';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route path="/home">
            <h1>Welcome</h1>
          </Route>
          <Route path="/:value" exact component={Param}>
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
