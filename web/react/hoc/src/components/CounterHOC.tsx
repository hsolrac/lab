import React from "react";
import withEnhancement from "../utils/withEnhancement";

const Counter = ({ count, incrementCount }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={incrementCount}>Increment</button>
  </div>
);

const EnhancedCounter = withEnhancement(Counter);

export default EnhancedCounter;
