import {
  FETCH_TO_DO_LIST_START,
  FETCH_TO_DO_LIST_SUCCESS,
  FETCH_TO_DO_LIST_FAILURE,
  REMOVE_ITEM_FROM_TODO_LIST,
  ADD_NEW_ITEM,
  ADD_NEW_VIDEO,
  TOOGLE_STATE_IMPORTANT_ITEM,
  TOOGLE_STATE_COMPLETED_ITEM,
  SAVE_CHANGED_ITEM,
  CLEAN_COMPLETED_LIST
} from '../actionTypes'

const initialState = {
  toDoList: [],
  isFetching: false,
  error: false,
  isUploaded: false
}

export default function toDoItemsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_TO_DO_LIST_START:
      return {
        ...state,
        toDoList: [],
        isFetching: true,
        isUploaded: false
      }
    case FETCH_TO_DO_LIST_SUCCESS:
      return {
        ...state,
        toDoList: payload,
        isFetching: false,
        isUploaded: true
      }
    case FETCH_TO_DO_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        isUploaded: false
      }
    case ADD_NEW_ITEM:
      state.toDoList.push({
        id: Date.now(),
        name: payload,
        important: false,
        isCompleted: false,
        created: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
        videos: []
      })
      return {
        ...state
      }
    case ADD_NEW_VIDEO:
      const indexItem = state.toDoList.findIndex(item => item.id === payload.id)
      state.toDoList[indexItem].videos.push({
        youtubeId: payload.newVideoLink,
        name: payload.newVideoName
      })
      return {
        ...state
      }
    case TOOGLE_STATE_IMPORTANT_ITEM:
      const indexImportantItem = state.toDoList.findIndex(item => item.id === payload)
      state.toDoList[indexImportantItem].important = !state.toDoList[indexImportantItem].important
      return {
        ...state
      }
    case TOOGLE_STATE_COMPLETED_ITEM:
      const indexCompletedItem = state.toDoList.findIndex(item => item.id === payload)
      state.toDoList[indexCompletedItem].isCompleted = !state.toDoList[indexCompletedItem].isCompleted
      return {
        ...state
      }
    case SAVE_CHANGED_ITEM:
      const indexIsEditingItem = state.toDoList.findIndex(item => item.id === payload.id)
      state.toDoList[indexIsEditingItem].name = payload.newValue
      return {
        ...state
      }
    case REMOVE_ITEM_FROM_TODO_LIST:
      // исходный массив дел передается по ссылке, удаляем нужный item из исходного массива api/mockToDoList.js
      const indexToRemove = state.toDoList.findIndex(item => item.id === payload);
      state.toDoList.splice(indexToRemove, 1)
      return {
        ...state
      }
    case CLEAN_COMPLETED_LIST:
      for (let i = 0; i < state.toDoList.length; i++) {
        if (state.toDoList[i].isCompleted === true) {
          state.toDoList.splice(i, 1)
          i--
        }
      }
      return {
        ...state
      }
    default:
      return state
  }
}