
import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './reducers'
export default configureStore({

  
  reducer: {

    todo: todosSlice,
  },
})