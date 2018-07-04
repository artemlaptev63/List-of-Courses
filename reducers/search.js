import {
  SEARCH_TO_DO_ITEM_START,
  SEARCH_TO_DO_ITEM_SUCCESS,
  SEARCH_TO_DO_ITEM_FAILURE
} from '../actionTypes'

const initialState = {
  searchText: '',
  isSearching: false,
  error: false
}

export default function searchToDoItem(state = initialState, { type, payload }) {
  switch (type) {
    case SEARCH_TO_DO_ITEM_START:
      return {
        ...state,
        isSearching: true
      }
    case SEARCH_TO_DO_ITEM_SUCCESS:
      return {
        ...state,
        isSearching: false,
        searchText: payload
      }
    case SEARCH_TO_DO_ITEM_FAILURE:
      return {
        ...state,
        isSearching: false,
        error: true
      }
    default:
      return state
  }
}