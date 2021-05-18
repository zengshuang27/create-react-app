/*
 * @Author: zs
 * @Date: 2021-05-17 08:37:57
 * @LastEditors: zs
 * @LastEditTime: 2021-05-18 08:59:27
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PageDemo from "./containers/PageDemo"
import reportWebVitals from './reportWebVitals';
import './index.css';
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <PageDemo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
