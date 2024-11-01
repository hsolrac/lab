import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../actions/index";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Count: {count}</button>
    </div>
  );
};

export default Counter;
