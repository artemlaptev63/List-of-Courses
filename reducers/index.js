import { combineReducers } from 'redux'
import toDoList from './toDoList'
import search from './search'
import stateInputAdd from './stateInputAdd'
import plusAddNewItem from './stateShowPlusAddNewItem'
import pagesNames from './pagesNames'


const reducers = combineReducers({
  toDoList,
  search,
  stateInputAdd,
  plusAddNewItem,
  pagesNames
})
export default reducers