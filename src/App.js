import React, { Component } from "react";
import TodoCard from "./TodoCard";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

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

  handleDelete = (index) => {
    // console.log('was clicked...', index)
    let newList = this.state.listOfTodo;
    newList.splice(index, 1);
    this.setState({listOfTodo: [...newList]})

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
              return <TodoCard key={index} index={index} title={todo} clickToDelete={this.handleDelete}/>
            })}
          </ol>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.name}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
