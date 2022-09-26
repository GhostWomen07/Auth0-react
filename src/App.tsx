import "styles/app.scss";
import "styles/global.scss";
import { Provider } from "react-redux";
import store from "redux/store";
import "./i18n";
import "bootstrap/dist/css/bootstrap.min.css"


import Home from "pages";
//import Auth0ProviderWithHistory from "auth0Provider";

function App(): JSX.Element {
  return (
  //  <Auth0ProviderWithHistory>
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
    //  </Auth0ProviderWithHistory>
  );
}

export default App;
