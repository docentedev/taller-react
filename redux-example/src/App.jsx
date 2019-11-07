import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Counter from './components/counter/Counter';
import Todos from './components/todos/Todos';
import Chart from './components/chart/Chart';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
        <Todos />
        <Chart />
      </Provider>
    </div>
  );
}

export default App;
