import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./UI/Header.jsx";
import Footer from "./UI/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
