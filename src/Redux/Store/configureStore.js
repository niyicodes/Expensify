import { legacy_createStore as createStore, combineReducers } from "redux";
import expensesReducer from "../Reducers/Expenses"
import filtersReducer from "../Reducers/Filter"



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
 const store = createStore(
  combineReducers({
   expenses: expensesReducer,
   filters: filtersReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
 return store
}