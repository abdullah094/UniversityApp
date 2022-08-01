import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: {


      user:{},

  }
    
  ,

  reducers: {
      test(state = 0){
console.log(state.name)
      },
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    },
    loginData(state = 0 , action){
      let data = action.payload
state.user = data

    }
  }
})

export const { todoAdded, todoToggled,test,loginData } = todosSlice.actions
export default todosSlice.reducer