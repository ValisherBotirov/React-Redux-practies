import React from "react";
import { compose, createStore } from "redux";

function ComposeMethod() {
  const qush = (val) => {
    return val + 10;
  };

  const ayir = (val) => {
    return val - 2;
  };

  const kupay = (val) => {
    return val * 2;
  };

  const mixFunc = compose(qush, ayir, kupay);
  const natija = mixFunc(3);
  console.log(natija);

  // redux practis

  const initialState = [
    {
      name: "Valisher",
    },
  ];

  const ADD_NAME = "ADD/NAME";

  const actionCreator = (age) => {
    return {
      type: ADD_NAME,
      payload: {
        age: age,
      },
    };
  };

  const actionReduser = (state = initialState, action) => {
    if (action.type === ADD_NAME) {
      // console.log(action);
      return [...state, action.payload];
    } else return state;
  };

  const store = createStore(actionReduser);
  store.dispatch(actionCreator("Developer"));
  // console.log(store.getState());

  return <h2>Compose Result : {natija}</h2>;
}

export default ComposeMethod;
