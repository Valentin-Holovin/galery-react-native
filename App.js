import React from "react";
import { Provider } from "react-redux";
import { Navigation } from "./src/navigation/navigation";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
