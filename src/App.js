import React, { Component } from 'react';

import * as actions from './store/actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      time: ''
    };
  }    
  handleClick = () => {
    var color = this.state.color 
    var time = this.state.time
    this.props.dispatch(actions.delayChange(time, color))
  }
  handleChange = (e) => {
    var color = e.target.value
    this.setState({
      color: color
    })
  }
  handleInputChange = (e) => {
    var time = e.target.value 
    if (isNaN(time)) {
      alert('time只能是数字')
    } else {
      this.setState({
        time: time
      })
    }
  }
  render() {  
    return (
      <div className="App">
        <Timer color={this.props.color} />
        <br/><br/>
        <input value={this.state.time} onChange={this.handleInputChange} />
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

function select(state){
  return {
    ...state
  }
}

export default connect(select)(App);
