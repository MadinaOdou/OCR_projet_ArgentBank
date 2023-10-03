import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage", done: true },
  ],
  reducers: {
    addTask: (state, action) => {
      // { type: "todo/addTask", payload: "Faire les courses" }
      const newTask = {
        id: Date.now(),
        done: false,
        text: action.payload,
      };

      state.push(newTask);
    },
    toogleTask: (state, action) => {
      // { type: "todo/toogleTask", payload: 20 }
      const task = state.find((t) => t.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
      // { type: "todo/deleteTask", payload: 20 }
      state = state.filter((t) => t.id !== action.payload);
      return state;
    },
  },
});

export const { addTask, deleteTask, toogleTask } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
