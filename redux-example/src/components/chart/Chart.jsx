import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Chart } from 'react-charts'

import './Chart.css';

function ChartComp() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const dataStore = useSelector((store) => store.chart.data);
    const axesStore = useSelector((store) => store.chart.axes);

    const dispatch = useDispatch();

    const data = dataStore;
    const axes = axesStore;

  return (
    <div className="chart">
        x <input value={x} onChange={(event) => setX(Number.parseInt(event.target.value))} type="number" /><br />
        y <input value={y} onChange={(event) => setY(Number.parseInt(event.target.value))} type="number" /><br />

        <div onClick={() => dispatch({ type: 'chart/add', payload: [x, y] })}>Agregar punto</div>
      <Chart data={data} axes={axes} />
    </div>
  )
}

export default ChartComp;