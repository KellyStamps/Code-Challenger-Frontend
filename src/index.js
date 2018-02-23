import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import { createStore } from 'redux';
// import { Provider } from 'react-redux'; 
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

// const store = createStore(
//   shoppingListItemReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <BrowserRouter>
    <App />
    // <App store={store}/>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
