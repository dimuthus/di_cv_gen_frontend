import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ResumeComponent from "./components/resume/resume";
import From from "./components/form/form";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={From} />
      <Route path="/view_resume/:id" exact component={ResumeComponent} />
    </Router>
  );
}

export default App;
