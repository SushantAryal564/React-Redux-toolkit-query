import { useSelector, useDispatch } from "react-redux";
import React, { useState, useRef } from "react";
import { increment, decrement, reset, increasebyamount } from "./CounterSlice";
function Counter() {
  const inputRef = useRef(null);
  const count = useSelector((state) => {
    return state.counter.count;
  });
  const dispatch = useDispatch();
  const increaseValueHandler = () => {
    dispatch(increasebyamount(Number(inputRef.current.value) || 0));
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <input ref={inputRef} type="text" />
        <button onClick={increaseValueHandler}>increase</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </section>
  );
}

export default Counter;
