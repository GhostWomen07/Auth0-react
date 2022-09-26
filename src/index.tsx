import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

ReactDOM.render(
  <Auth0Provider
  domain="dev-ji7brigt.us.auth0.com"
  clientId="M3mK9VAgIh48EHuw6SiZdveIRlXND9oc"
  redirectUri={window.location.origin}
>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
