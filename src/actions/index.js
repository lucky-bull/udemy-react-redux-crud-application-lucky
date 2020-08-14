/* action: javascriptのオブジェクト
 * typeというkey と typeに対応する値(値: ユニークなものではないとならない)をもつ
 */
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});
