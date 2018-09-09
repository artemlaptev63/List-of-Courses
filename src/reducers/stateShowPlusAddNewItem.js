import { SHOW_PLUS_FOR_ADD_NEW_ITEM } from "../actionTypes";

const initialState = {
  addNewItemState: null
};

export default function searchToDoItem(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case SHOW_PLUS_FOR_ADD_NEW_ITEM:
      return {
        addNewItemState: payload
      };
    default:
      return state;
  }
}
