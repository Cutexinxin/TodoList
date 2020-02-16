import React from 'react';
// import { HashRouter, Route, Switch } from 'react-router-dom';
// import 'antd/dist/antd.css'
// import { Input, Button, List } from 'antd';
import store from './store/index'
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'
import TodoListUI from './AppUI'
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    //传递数据返回一定会执行下面代码
    store.subscribe(this.storeChange)
  }
  //更新组件的状态
  storeChange = () => {
    this.setState(store.getState())
  }
  changeValue = (e) => {
    // console.log (e.target.value,666)
    const action = {
      type: CHANGE_INPUT,
      value: e.target.value
    }
    store.dispatch(action)
  }
  clickBtn = () => {
    const action = { type: ADD_ITEM }
    store.dispatch(action)
  }
  deleteItem = (index) => {
    const action = {
      type: DELETE_ITEM,
      index
    }
    store.dispatch(action)
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeValue={this.changeValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }
}

