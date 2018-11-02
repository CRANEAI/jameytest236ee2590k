import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import order_status from "./reducer_order_status"

const rootReducer = combineReducers({
  order_status: order_status
})

export default rootReducer
