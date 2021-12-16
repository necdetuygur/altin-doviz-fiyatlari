import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import thunk from "redux-thunk";
import "./css/superhero.css";
import 'font-awesome/css/font-awesome.min.css';
import "./css/style.css";
import App from "./components/App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const store = createStore(reducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

serviceWorkerRegistration.register(null);
