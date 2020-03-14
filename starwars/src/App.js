import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/index";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
