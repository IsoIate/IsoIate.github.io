import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './scripts/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/js/all.js"
import { Provider } from 'react-redux'
import {combineReducers, createStore} from 'redux'

/* defaultParameter */
let primaryState = [];
let orderState = [0, 0];
let optionState = [0, 0, 0, 0];

/* 주문 표 생성, 제거 */
function reducer(state = primaryState, action) {
    if(action.type === "항목추가") {
        let copy = [...state];
        copy.push(action.payload);
        return copy;
    }
    else if (action.type === "항목제거") {
        let copy = [...state];
        let temp = action.payload;
        copy.splice(temp, 1);
        return copy;
    }
    else {
        return state
    }

}

/* 결제 내용 계산기 */
function orderReducer(state = orderState, action) {
    if(action.type === "주문추가") {
        let copy = [...state];

        copy[0] += action.payload.count;
        copy[1] += action.payload.price;
        return copy;
    }
    else if (action.type === "주문제거") {
        let copy = [...state];
        let tempCount = action.payload.count;
        let tempPrice = action.payload.price;

        copy[0] -= tempCount;
        copy[1] -= tempPrice;
        return copy;
    }
    else {
        return state
    }

}

/* 옵션 설정, 초기화 */
function optionReducer(state = optionState, action) {
    if (action.type === "사이즈변경") {
        let copy = [...state];
        copy[0] = action.payload;
        return copy;
    }
    else if (action.type === "얼음변경") {
        let copy = [...state];
        copy[1] = action.payload;
        return copy;
    }
    else if (action.type === "시럽변경") {
        let copy = [...state];
        copy[2] = action.payload;
        return copy;
    }
    else if (action.type === "포장변경") {
        let copy = [...state];
        copy[3] = action.payload;
        return copy;
    }
    else if (action.type === "사이즈초기화") {
        let copy = [...state];
        copy[0] = 1;
        return copy;
    }
    else if (action.type === "얼음초기화") {
        let copy = [...state];
        copy[1] = 1;
        return copy;
    }
    else if (action.type === "시럽초기화") {
        let copy = [...state];
        copy[2] = 1;
        return copy;
    }
    else if (action.type === "포장초기화") {
        let copy = [...state];
        copy[3] = 1;
        return copy;
    }
    else {
        return state
    }
}

let store = createStore(combineReducers({ reducer, orderReducer, optionReducer }));

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store = { store }>
            <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
