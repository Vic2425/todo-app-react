import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: true,
      inputValue: "",
      listOfTodo: []
    };
  }

  handleClick = () => {
    this.state.isClicked ? 
      this.setState({isClicked : false}) : 
        this.setState({isClicked : true})
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({listOfTodo: [...this.state.listOfTodo, this.state.inputValue]})
    this.setState({inputValue: ''})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <button onClick={this.handleClick}> Click Me </button> */}
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.inputValue} onChange={this.handleChange}></input>
            <button type="submit">Submit</button>
          </form>
          {/* <p> {this.state.isClicked ? 'true' : 'false'} </p> */}
          <ol> 
            {this.state.listOfTodo.map((todo, index) => {
              return <li key={index}>{todo}</li>
            })}
          </ol>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
