import React, { Component } from 'react';
import ConvertForm from './ConvertForm';
import StatusContext from './StatusContext';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: 0,
      fahrenheit: 0
    }
    this.getFahrenheit = this.getFahrenheit.bind(this);
    this.getCelsius = this.getCelsius.bind(this);
  }
  getFahrenheit(celsius) {
    const c = Number.parseFloat(celsius);
    const f = (c * 9) / 5 + 32;
    console.log(`getFahrenheit: ${c} ---> ${f}`);
    this.setState({ celsius: c, fahrenheit: f});
  }
  getCelsius(fahrenheit) {
    const f = Number.parseFloat(fahrenheit);
    const c = ((f- 32) * 5) / 9;
    console.log(`getCelsius: ${f} ---> ${c}`);
    this.updateTemperature({celsius: c, fahrenheit: f});
  }
  updateTemperature(temp) {
    this.setState({celsius: temp});
  }
  render() {
    return (
      <React.Fragment>
        <StatusContext.Provider value={this.state.celsius}>
          <h1>Temperature Converter</h1>
          <ConvertForm
            celsius={this.state.celsius}
            fahrenheit={this.fahrenheit}
            getFahrenheit={this.getFahrenheit}
            getCelsius={this.getCelsius}

          />
        </StatusContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
