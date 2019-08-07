import { createStore } from 'redux'
import rootReducer from './rootReducer'
import middleware from './middleware'


const storeConfig = initialState => {
  const store = createStore(rootReducer, initialState, middleware)
  return store
}

export default storeConfig
