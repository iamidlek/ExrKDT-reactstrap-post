import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/ExrKDT-reactstrap-post" element={<Main />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  // </React.StrictMode>
  document.getElementById("root")
);
