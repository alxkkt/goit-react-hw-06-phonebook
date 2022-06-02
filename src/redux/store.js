import { combineReducers, createStore } from 'redux';
import contactsReducer from './contacts/contactsReducer';

const reducers = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
