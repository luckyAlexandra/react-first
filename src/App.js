import React, { Component } from 'react';

import * as actions from './store/actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    };
  }    
  handleClick = () => {
    var color = this.state.color
    this.props.dispatch(actions.changeBg(color))
  }
  handleChange = (e) => {
    var color = e.target.value
    this.setState({
      color: color
    })
  }
  render() {  
    return (
      <div className="App">
        <Timer color={this.props.color} />
        <br/><br/>
        <select onChange={this.handleChange}>
          <option value="">select</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
        <br/><br/>
        <button onClick={this.handleClick}>change</button>
      </div>
    );
  }
}

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  render() {
    return (
      <div style={{background: this.props.color}}>{this.state.date.toLocaleTimeString()}</div>
    )
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
}

//从 Redux store 接收到全局的 state，然后返回组件中需要的 props。
function select(state){
  return {
    ...state
  }
}

//使用connect() 方法将包装好的组件连接到Redux。
export default connect(select)(App);
