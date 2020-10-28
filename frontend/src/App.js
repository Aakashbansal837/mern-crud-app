import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import View from "./component/View";
import Create from "./component/Create";
import Update from "./component/Update";

function App() {
  return (
    <Router>
      <Route path="/" exact component={View}></Route>
      <Route path="/create" exact component={Create}></Route>
      <Route path="/update" exact component={Update}></Route>
    </Router>
  );
}

export default App;
