import * as React from 'react';
import Controller from './AppController';
import './App.css';

const ReactHeatmap = require('react-heatmap');
const logo = require('./logo.svg');

// TODO: use declare instead
interface HeatmapData {
  x: number;
  y: number;
}

interface State {
  heatmapDataOrdered: HeatmapData[];
  heatmapDataPlain: HeatmapData[];
  heatmapDataTricky: HeatmapData[];
  heatmapDataPure: HeatmapData[];
}

class App extends React.Component<{}, State> {
  constructor(props: object) {
    super(props);
    this.state = Controller.getState();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit src/App.tsxs and save to reload.
        </p>
        <button onClick={() => this.setState(Controller.getState())}>
          generate random data
        </button>
        <div>
          <div className="Heatmap-wrapper">
            Ordered
            <ReactHeatmap
              max={Controller.MAX}
              data={this.state.heatmapDataOrdered}
            />
          </div>
          <div className="Heatmap-wrapper">
            Plain
            <ReactHeatmap
              max={Controller.MAX}
              data={this.state.heatmapDataPlain}
            />
          </div>
          <div className="Heatmap-wrapper">
            Tricky
            <ReactHeatmap
              max={Controller.MAX}
              data={this.state.heatmapDataTricky}
            />
          </div>   
          <div className="Heatmap-wrapper">
            Pure
            <ReactHeatmap
              max={Controller.MAX}
              data={this.state.heatmapDataPure}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
