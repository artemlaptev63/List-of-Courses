import {
  FETCH_TO_DO_LIST_START,
  FETCH_TO_DO_LIST_SUCCESS,
  FETCH_TO_DO_LIST_FAILURE,
  SEARCH_TO_DO_ITEM_START,
  SEARCH_TO_DO_ITEM_SUCCESS,
  SEARCH_TO_DO_ITEM_FAILURE,
  REMOVE_ITEM_FROM_TODO_LIST,
  TOOGLE_STATE_INPUT_ADD,
  SAVE_CHANGED_ITEM,
  ADD_NEW_ITEM,
  ADD_NEW_VIDEO,
  SHOW_PLUS_FOR_ADD_NEW_ITEM,
  TOOGLE_STATE_IMPORTANT_ITEM,
  TOOGLE_STATE_COMPLETED_ITEM,
  SET_PAGE_NAME,
  CLEAN_COMPLETED_LIST,
  TOOGLE_STATE_INPUT_ADD_VIDEO
} from "../actionTypes";
import { fetchToDoListApi, fetchFilterToDo } from "../api";

export const fetchToDoList = () => async dispatch => {
  dispatch({ type: FETCH_TO_DO_LIST_START });

  try {
    const toDoList = await fetchToDoListApi();
    dispatch({
      type: FETCH_TO_DO_LIST_SUCCESS,
      payload: toDoList
    });
  } catch (err) {
    dispatch({
      type: FETCH_TO_DO_LIST_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const searchToDoItem = text => async dispatch => {
  dispatch({ type: SEARCH_TO_DO_ITEM_START });

  try {
    const searchText = await fetchFilterToDo(text);
    dispatch({
      type: SEARCH_TO_DO_ITEM_SUCCESS,
      payload: searchText
    });
  } catch (err) {
    dispatch({
      type: SEARCH_TO_DO_ITEM_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const removeItemFromToDoList = id => dispatch => {
  dispatch({
    type: REMOVE_ITEM_FROM_TODO_LIST,
    payload: id
  });
};

export const cleanCompletedListAction = () => dispatch => {
  dispatch({
    type: CLEAN_COMPLETED_LIST
  });
};

export const toogleInputAddNewItem = () => dispatch => {
  dispatch({
    type: TOOGLE_STATE_INPUT_ADD
  });
};

export const toogleInputAddNewVideo = () => dispatch => {
  dispatch({
    type: TOOGLE_STATE_INPUT_ADD_VIDEO
  });
};

export const setStateForPlusAddNewItem = booleanState => dispatch => {
  dispatch({
    type: SHOW_PLUS_FOR_ADD_NEW_ITEM,
    payload: booleanState
  });
};

export const toogleStateImportantIconAction = id => dispatch => {
  dispatch({
    type: TOOGLE_STATE_IMPORTANT_ITEM,
    payload: id
  });
};

export const toogleStateIsCompletedAction = id => dispatch => {
  dispatch({
    type: TOOGLE_STATE_COMPLETED_ITEM,
    payload: id
  });
};

export const saveChangedItemAction = (id, newValue) => dispatch => {
  dispatch({
    type: SAVE_CHANGED_ITEM,
    payload: {
      id: id,
      newValue: newValue
    }
  });
};

export const addNewItemAction = newItem => dispatch => {
  dispatch({
    type: ADD_NEW_ITEM,
    payload: newItem
  });
  dispatch({
    type: TOOGLE_STATE_INPUT_ADD
  });
};

export const addNewVideoAction = (
  newVideoLink,
  id,
  newVideoName
) => dispatch => {
  dispatch({
    type: ADD_NEW_VIDEO,
    payload: {
      newVideoLink: newVideoLink,
      newVideoName: newVideoName,
      id: id
    }
  });
  dispatch({
    type: TOOGLE_STATE_INPUT_ADD_VIDEO
  });
};

export const setPageName = pageName => dispatch => {
  dispatch({
    type: SET_PAGE_NAME,
    payload: pageName
  });
};
