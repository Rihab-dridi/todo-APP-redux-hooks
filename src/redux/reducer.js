import { ADD, DELETE, DONE } from "./action-types";

const initialState = {
  todos: [
    { text: "Save the World", id: 1, isDone: false },
    { text: "Walk the Dog", id: 2, isDone: false },
  ],
  filter:null,
  counter:0,
  timer:0
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      };
    case DONE:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };

    case ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
//map: to loop a significant table and change the content of the case
//map + condition : to loop a significant table: , check a significant condition and change only the content of the these verified conditions
