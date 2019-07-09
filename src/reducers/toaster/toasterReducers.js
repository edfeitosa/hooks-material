import { CLICK_TOASTER } from '../../actions/actionTypes';

const initialState = {
  open: false,
  setOpen: false
};

export const toasterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_TOASTER:
      return {
        ...state,
        setOpen: action.newValue
      };
    default:
      return state;
  }
};