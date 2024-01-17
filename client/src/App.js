import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./otherpage";
import MainComponent from "./MainComponent";

function App() {
  return (
    <Router>
      <Fragment>
        <header className="header">
          <div>This is a multicontainer application</div>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div className="main">
          <Route exact path="/" component={MainComponent} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
