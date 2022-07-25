import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function CounterApp() {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();
  const decreaseCountAction = (number) => ({
    type: "giam", // ACTION TYPE
    number: number, //PARAMETER
  });
  const increaseCountAction = (number) => ({
    type: "tang", // ACTION TYPE
    number: number, // PARAMETER
  });
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button
          onClick={() => {
            dispatch(decreaseCountAction(1));
          }}
        >
          Decrease
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(increaseCountAction(1));
          }}
        >
          Increase
        </button>
      </div>
      <div></div>
    </div>
  );
}
