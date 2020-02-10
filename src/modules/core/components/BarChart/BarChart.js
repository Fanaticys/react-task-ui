import React, { useMemo } from 'react'
import Chart from "react-apexcharts";

import useSocketState from 'modules/socket/hooks/useSocketState';

import ChartContainer from '../ChartContainer';
import { generateSeries, generateOptions } from './BarChart.utils';

const BarChart = () => {
  const chunks = useSocketState();

  const options = useMemo(() => generateOptions(), []);
  const series = useMemo(() => generateSeries(chunks), [chunks]);

  return (
    <ChartContainer>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="400"
      />
    </ChartContainer>
  )
};

export default BarChart;
