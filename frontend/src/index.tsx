// this is to start the app "this is our entry point" 

import React from "react";
import ReactDOM from "react-dom/client";  
// This imports ReactDOM, which is responsible for rendering your React app inside the actual HTML page.
import { BrowserRouter } from "react-router-dom";
// This is what makes routing work in your app.
// Without it, typing /signup in the browser wouldn’t show your signup page — you’d just get a blank page.
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
