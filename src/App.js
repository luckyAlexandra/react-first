import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    };
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
        <Timer color={this.state.color} />
        <select onChange={this.handleChange}>
          <option value="">select</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
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

export default App
