import { createStore } from "redux";
import { mockMicrosoft } from "./sample-data.js";

const dummyData = [mockMicrosoft, mockMicrosoft];

const defaultState = {
  articles: dummyData
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

const articleStore = createStore(articleFeed);
console.log(articleStore.getState());
