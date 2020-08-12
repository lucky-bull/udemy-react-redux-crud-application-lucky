// reducer: 状態をどう変化させるかを定義するもの

// appに存在する全reducerを統括する。
// 全reducerを1つのreducerに結合する。

import { combineReducers } from "redux";
import count from "./count";

export default combineReducers({ count });
