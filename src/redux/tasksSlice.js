import uuid from "react-uuid";
import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    //name reference of the slice
  name: "tasks",
  initialState: {
    //state contains an array of tasks
    value: [
      {
        id: uuid(),
        description: "Stop procrastination",
        done: false,
      },
      {
        id: uuid(),
        description: "Do the dishes",
        done: true,
      },
      {
        id: uuid(),
        description: "Finish the lab",
        done: false,
      },
    ],
  },
  //actions available for the slice
  reducers: {
    addTask: (state, action) => {
        state.value.push({id: uuid(), ...action.payload });
    },
    removeTask: (state, action) => {
        state.value = state.value.filter((task) => task.id !== action.payload);
    },
    //changing the status of the provided task
    changeTaskStatus: (state, action) => {
        state.value = state.value.map((task) => {
          if (task.id === action.payload) {
            task.done = !task.done;
          }
          return task;
        });
    },
    //remove all tasks
    clearTasks: (state) => {
        state.value = [];
    }
  }
});

export const { addTask, removeTask, changeTaskStatus, clearTasks } = tasksSlice.actions;
export default tasksSlice.reducer;