import { createStore } from "redux";
import { mockMicrosoft } from "./sample-data.js";

const defaultState = {
  one: 1,
  two: 2
};

const articleFeed = (state = defaultState, action) => {
  switch (action.type) {
    case "LOAD":
      return { ...state, text: "Loading data..." };
    case "ADD":
      return { ...state, text: "Adding data..." };
    case "REMOVE":
      return { ...state, text: "Removing data..." };
    default:
      return state;
  }
};

const articles = createStore(articleFeed);
console.log(articles.getState());
