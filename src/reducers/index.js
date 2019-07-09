import { toasterReducer } from './toaster/toasterReducers';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  clickToaster: toasterReducer
});