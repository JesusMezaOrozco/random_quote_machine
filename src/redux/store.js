import { configureStore } from '@reduxjs/toolkit'
import { messageReducer } from './reducers'

export default configureStore({
	reducer: messageReducer,
})
