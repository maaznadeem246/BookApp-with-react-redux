import { applyMiddleware } from 'redux'
import middlewareChecker from './middlewareChecker'

import thunk from 'redux-thunk'

export default applyMiddleware(thunk, middlewareChecker)