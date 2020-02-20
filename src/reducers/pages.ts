import { SET_ACTIVE_AUTHOR, PAGE_OF_DAY } from '../constants';

const initialState = {
  pageNum: PAGE_OF_DAY,
};

const pages = (
  state = initialState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case SET_ACTIVE_AUTHOR:
      return { ...state, pageNum: action.payload };

    default:
      return state;
  }
};

export default pages;
