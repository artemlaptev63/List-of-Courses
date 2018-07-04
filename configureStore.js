import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore() {
  let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
  return store
}