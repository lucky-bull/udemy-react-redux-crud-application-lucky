import { INCREMENT, DECREMENT } from "../actions";

// 状態をオブジェクトとして定義。
// 初期状態のオブジェクトをいれる変数名はinitialStateにする

const initialState = { value: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
