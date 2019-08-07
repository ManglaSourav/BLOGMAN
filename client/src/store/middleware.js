import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const isProduction = process.env.NODE_ENV === 'production'
const middlewareData = []

middlewareData.push(thunk)
if (!isProduction) {
  middlewareData.push(createLogger())
}

const middleware = compose(applyMiddleware(...middlewareData))
export default middleware
