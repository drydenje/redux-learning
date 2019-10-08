import { createStore } from "redux";

const defaultState = {
  welcome: "Hi",
  otherStuff: "some stuff"
};

const greeting = (state = defaultState, action) => {
  switch (action.type) {
    case "GREET_ME":
      return { ...state, welcome: "Hello Scott" };
    case "GREET_WORLD":
      return { ...state, welcome: "Hello World" };
    default:
      return state;
  }
};

const store = createStore(greeting);
console.log(store.getState());

store.dispatch({
  type: "GREET_ME"
});

// console.log(store);
console.log(store.getState());
