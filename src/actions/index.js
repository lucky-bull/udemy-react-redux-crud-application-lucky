/* action: javascriptのオブジェクト
 * typeというkey と typeに対応する値(値: ユニークなものではないとならない)をもつ
 */
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});
