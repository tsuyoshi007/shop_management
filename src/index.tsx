import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import AppLayout from "./components/AppLayout";
import LoginPage from "./views/Login/components/LoginPage";
import { BrowserRouter, Switch } from "react-router-dom";
import Category from "./views/Category";
import SectionRoute from "./components/SectionRoute";
import { API_MOUNT_BASE } from "./config";
import ThemeProvider from "./components/Theme";
import { createStore } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";
import TabTitle from './components/TabTitle'


const Routes: React.FC = () => {
  return (
    <Switch>
      <TabTitle title={"Dashboard"}/>
      <SectionRoute exact permissions={true} path="/" component={Category} />
    </Switch>
  );
};

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <BrowserRouter basename={API_MOUNT_BASE}>
      <ThemeProvider isDefaultDark={true}>
        <Provider store={store}>
          <AppLayout>
            <Routes />
          </AppLayout>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
