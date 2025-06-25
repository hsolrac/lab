import * as R from "remeda";
import { INCREMENT, DECREMENT } from "../actions/index";

const initialState = {
  count: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return R.set(state, "count", R.add(state.count, 1));
    case DECREMENT:
      return R.set(state, "count", R.subtract(state.count, 1));
    default:
      return state;
  }
}
