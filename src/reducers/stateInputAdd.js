import {
  TOOGLE_STATE_INPUT_ADD,
  TOOGLE_STATE_INPUT_ADD_VIDEO
} from "../actionTypes";

const initialState = {
  inputAddState: false,
  inputAddVideoState: false
};

export default function searchToDoItem(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case TOOGLE_STATE_INPUT_ADD:
      return {
        inputAddState: !state.inputAddState
      };
    case TOOGLE_STATE_INPUT_ADD_VIDEO:
      return {
        inputAddVideoState: !state.inputAddVideoState
      };
    default:
      return state;
  }
}
