import React, { Component } from 'react';
import ConvertForm from './ConvertForm';
import StatusContext from './StatusContext';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      celsius: 0,
      fahrenheit: 0
    }
  }
  getFahrenheit(event) {
    const celsius = Number.parseFloat(event.target.value);
    const fahrenheit = (celsius * 9) / 5 + 32;
    console.log(`getFahrenheit: ${celsius} ---> ${fahrenheit}`);
    this.setState({ celsius, fahrenheit});
  }
  getCelsius(event) {
    const fahrenheit = Number.parseFloat(event.target.value);
    const celsius = ((fahrenheit - 32) * 5) / 9;
    this.setState({ celsius, fahrenheit })
  }
  render() {
    return (
      <React.Fragment>
        <StatusContext.Provider value={this.state.celsius}>
          <ConvertForm
            celsius={this.state.celsius}
            fahrenheit={this.state.fahrenheit}
            getFahrenheit={this.getFahrenheit.bind(this)}
            getCelsius={this.getCelsius.bind(this)}

          />
        </StatusContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
