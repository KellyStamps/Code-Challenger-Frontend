import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer'
import { Provider } from 'react-redux'; 
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

// const rootReducer = combineReducers({
//   books: booksReducer,
//   authors: authorsReducer
// });
// 
// const store = createStore(rootReducer);

const store = createStore(userReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
