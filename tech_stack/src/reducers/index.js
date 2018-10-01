import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

//assigning LibraryReducer to libraries key
export default combineReducers({
  libraries: LibraryReducer
});
