import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./containers/header";
// import ProductComponent from "./containers/productComponent";
import ProductListing from "./containers/productListing";
import ProductDetails from "./containers/productDetail";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <div className="content">
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route
              path="/product/:productId"
              exact
              component={ProductDetails}
            />
            <Route>404 Not Fount!</Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
