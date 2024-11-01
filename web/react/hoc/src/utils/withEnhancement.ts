import { compose } from "recompose";
import withState from "recompose/withState";
import withHandlers from "recompose/withHandlers";

const withEnhancement = (WrappedComponent) =>
  compose(
    withState("count", "setCount", 0),
    withHandlers({
      incrementCount:
        ({ setCount }) =>
        () =>
          setCount((prevCount) => prevCount + 1),
    })
  )(WrappedComponent);

export default withEnhancement;
