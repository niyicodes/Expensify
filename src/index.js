import React from 'react';
import ReactDOM from 'react-dom/client';
import {addExpense} from './Redux/Action/Expenses'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './Redux/Store/configureStore';

const store = configureStore();

console.log(store.getState());

store.dispatch(addExpense({ description: 'Water bill', amount: "405", createdAT: '209'}))
store.dispatch(addExpense({ description: 'Water ', amount: "4500", createdAT: '204'}))
store.dispatch(addExpense({ description: ' bill', amount: "3500", createdAT: '2049'}))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

