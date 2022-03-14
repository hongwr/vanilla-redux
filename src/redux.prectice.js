import { createStore } from "redux";

const plus = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");
number.innerText = 0;
const reducer = (state = 0, action) => {
  switch (
    action.type // 무조건 switch는 switch (action.type) {}
  ) {
    case "ADD": //if ADD
      return state + 1;
    case "MINUS": //else if MINUS
      return state - 1;
    default:
      //else
      return state;
  }
};

// console.log(state, action);
// if (action.type === "ADD") {
//   return state + 1;
// } else if (action.type === "MINUS") {
//   return state - 1;
// }
// return state;

const countStore = createStore(reducer);

const onChange = () => {
  number.innerText = countStore.getState();
}; //state가 바뀔 때마다 실행해라. 이런 의미

countStore.subscribe(onChange);

plus.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
