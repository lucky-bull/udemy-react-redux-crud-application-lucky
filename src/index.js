import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"; // 作成したストアを全コンポーネントに渡すための機能

import "./index.css";
import reducer from "./reducers";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer);
// アプリケーション内の全階層のコンポーネントでstoreを利用できる
// propsを使用してバケツリレーで親から子に渡していかないでもよくなった。
// <Provider store={store}>
// <**** />
// </Provider>
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
