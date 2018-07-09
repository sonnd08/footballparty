import {combineReducers} from 'redux'

import toggleModals from './toggleModalsReducer'

export default combineReducers({
  toggleModals:toggleModals
})