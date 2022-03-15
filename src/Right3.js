import React from "react";
import "./style.css";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

const Right3 = (props) => {
  const dispatch = useDispatch(); //action을 이용하여 reducer를 호출한다.
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      />
    </div>
  );
};

export default Right3;
