import React from "react";
import "./style.css";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

const Left3 = (props) => {
  //   function f(state) {
  //     return state.number; //! state값에서 number를 쓰겠다. 아래 인자와 같은 함수
  //   }
  const number홍왕열 = useSelector((state김소라) => state김소라.number); // 여기서 App에서 props로 받겠다. //! useSelector는 함수를 인자로 받아야 한다. 변수 이름이나 useSelector에 들어오는 이름이나 아무 상관 없다.
  return (
    <div>
      <h1>Left3: {number홍왕열}</h1>{" "}
      {/*만약에 console.log로 부모와 함께 다르게 해서 찍어보았을 때, left3만 console.log가 찍힌다. 즉, 이것만 렌더링이 되고 부모는 렌더링이 되지 않는다. */}
    </div>
  );
};

export default Left3;
