import "./App.css";
import Dhaba from "./components/Dhaba";
import { Router, Switch, Link, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUsPage from "./pages/AboutUsPage";
import FeedPage from "./pages/FeedPage";
import ClassFeedPage from "./pages/ClassFeedPage";

function App() {
  return (
    <>
      <div className="App">{/* <Dhaba/> */}</div>
      <Switch>
        <Route exact path="/">
          <Dhaba/>
          {/* <FeedPage /> */}
          {/* <ClassFeedPage name='john'/> */}

        </Route>
        <Route exact path="/about">
          <AboutUsPage />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
