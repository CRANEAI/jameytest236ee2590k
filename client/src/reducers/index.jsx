import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import nouswrc from "./reducer_nouswrc"

const rootReducer = combineReducers({
  nouswrc: nouswrc
})

export default rootReducer
