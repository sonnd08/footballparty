import {combineReducers} from 'redux'

import toggleModalsReducer from './toggleModalsReducer'
import navReducer from './navReducer'

export default combineReducers({
  toggleModals:toggleModalsReducer,
  nav: navReducer
})