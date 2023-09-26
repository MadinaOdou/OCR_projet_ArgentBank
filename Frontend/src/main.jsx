import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";
// import { Provider } from "react-redux";
// import { store } from "./utils/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <React.StrictMode>
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  </React.StrictMode>
  // </Provider>
);
