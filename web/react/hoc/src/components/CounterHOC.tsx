import React from "react";
import withEnhancement from "../utils/withEnhancement";

const Counter = ({ count, incrementCount }) => (
  <div>
    <button onClick={incrementCount}>Count: {count}</button>
  </div>
);

const EnhancedCounter = withEnhancement(Counter);

export default EnhancedCounter;
