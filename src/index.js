import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer'
import challengeReducer from './reducers/challengeReducer'
import { Provider } from 'react-redux'; 
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const reducers = combineReducers({
  users: userReducer,
  challenges: challengeReducer
});

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
