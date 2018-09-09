import { SET_PAGE_NAME } from "../actionTypes";

const initialState = {
  activePage: null
};

export default function searchToDoItem(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case SET_PAGE_NAME:
      return {
        activePage: payload
      };
    default:
      return state;
  }
}
