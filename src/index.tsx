import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import ThemeProvider from "./components/Theme";
import Product from "./views/Product";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Product></Product>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
