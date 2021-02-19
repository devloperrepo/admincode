import React, {Component} from "react";
import { createBrowserHistory } from "history";
import indexRoutes from "./routes/";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import persist  from "./config/store";
import  PrivateRouteWrap  from "./routes/PrivateRouteWrap";
import BlankLayout from "./layouts/BlankLayout";
const persistStore = persist();
// global.ENV={
//   PORT: 1234,
//   HOST: "reviews.org",
//   BASE_URL: "http://staging.review.org/",
//   SOCKET_URL: "http://staging.reviews.org:1234/",
//   WEBVIEW_URL: "http://staging.reviews.org/",
//   WEBSITE_TITLE: "", 
//   WEBSITE_THEME : "",
//   SOCKET_PORT: 1234,
// };

const History = createBrowserHistory({ basename: "/" });


class App extends Component {
  //const [currentUser, SetcurrentUser] = useState(null);
  render() {
  return (
    <Provider store={persistStore.store}>
      <Router history={History}>
        <Switch>
          
          <Route exact path="/auth/login" component={BlankLayout} />
          {indexRoutes.map((prop, key) => {
            return (
              <PrivateRouteWrap
                path={prop.path}
                key={key}
                component={prop.component}
              />
            );
          })}
          
        </Switch>
      </Router>
    </Provider>
  );
  }
};

export default App;
