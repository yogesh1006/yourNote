import "./App.css";
import {Route,Switch} from "react-router-dom"
import Header from "./components/header/Header";
import { Login } from "./pages/Login/Login";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div>
      <Toaster />
      <Header />
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Signup}></Route>
      </Switch>
    </div>
  );
}

export default App;
