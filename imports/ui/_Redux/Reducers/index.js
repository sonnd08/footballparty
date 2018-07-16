import {combineReducers} from 'redux'

import toggleModalsReducer from './toggleModalsReducer'
import navReducer from './navReducer'
import datePickerReducer from './datePickerReducer'

export default combineReducers({
  toggleModals:toggleModalsReducer,
  nav: navReducer,
  datePicker: datePickerReducer
})