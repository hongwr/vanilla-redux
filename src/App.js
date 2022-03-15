import React, { useState } from "react";
import Left1 from "./Left";
import "./style.css";
import Right from "./Right";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";
//Provider = 어떤 component들에게 제공할 것인가에 대한 가장 바깥쪽 울타리를 정의
//useSelector = 어느 component에 무선으로 연결하고 싶을 때 사용하는 것!! //! 지금 여기서는 Left3에 들어간다.

function reducer(currentState, action) {
  //reducer에는 2개의 인자가 온다. 현재의 state값과 action!! //! return값이 새로은 state의 값이 된다.
  if (currentState === undefined) {
    return {
      number: 1, //number라는 state값이 기본적으로 1이다라고 지정!! undefined일 때 적용(약간 useState() 느낌, 초기값 정해주는 것 같은 느낌.)
    };
  }
  const newState = { ...currentState }; //redux는 각각의 state의 변화가 불변해야하기 때문에, 무조건 복사본을 사용한다!! 그렇기 때문에 spread 연산자를 사용하거나 filter를 사용한다.
  if (action.type === "PLUS") {
    //right3에서 useDispatch로 action에 접근하여 type을 지정했을 때, reducer는 그 action을 이용해서 state값을 변경시킬 수 있다.
    newState.number++;
  }
  return newState;
}
const store = createStore(reducer);

export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          {/*반드시 Provider에는 store가 들어와야하는데, 그 store에는 우리가 지정한 store가 들어와야 하는 것이다. //! 아래 두 개의 컴포넌트에 전달해주겠다. */}
          <Left1></Left1>
          <Right></Right>
        </Provider>
      </div>
    </div>
  );
}
