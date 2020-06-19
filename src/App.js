import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter} </h1>
        <button
          data-test="increment-button"
          onClick = {() => this.setState({ counter: this.state.counter + 1})} 
          >
            increment counter </button>
        <h1>App</h1>
      </div>
    );
  };
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
