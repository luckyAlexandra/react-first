//Redux 默认并不包含 React 绑定库，需要单独安装
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { doChange } from './store/reducers.js';

import App from './App';

//创建一个 Redux store 来以存放应用中所有的 state，需要传递一个主reducer。
var store = createStore(doChange)

//在渲染之前将根组件包装进 <Provider>, 使得store 能为下面的组件所用
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
