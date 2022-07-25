import React from "react";

const defaultState = {
  count: 0,
};
export default function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case "tang":
      return { ...state, count: state.count + action.number };

    case "giam":
      return { ...state, count: state.count - action.number };
    default:
      return state;
  }
}
