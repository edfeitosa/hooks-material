import { CLICK_TOASTER } from './actionTypes';

export const clickToaster = value => ({
  type: CLICK_TOASTER,
  newValue: value
});