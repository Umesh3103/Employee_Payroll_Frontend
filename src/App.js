import "./App.css";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetEmployeeComponent from "./component/GetEmployeeComponent";
import AddUpdateEmployeeComponent from "./component/AddUpdateEmployeeComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Router>
        <Switch>
          <Route path="/" exact component={GetEmployeeComponent}></Route>
          <Route
            path="/add-update-employee/:id"
            component={AddUpdateEmployeeComponent}
          ></Route>
        </Switch>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
