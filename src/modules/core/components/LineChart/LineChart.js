import React, { useMemo } from 'react'
import Chart from "react-apexcharts";

import useSocketState from 'modules/socket/hooks/useSocketState';

import ChartContainer from '../ChartContainer';
import { generateOptions, generateSeries} from './LineChart.utils';

const LineChart = () => {
  const chunks = useSocketState();

  const options = useMemo(() => generateOptions(chunks), [chunks]);
  const series = useMemo(() => generateSeries(chunks), [chunks]);

  return (
    <ChartContainer>
      <Chart
        options={options}
        series={series}
        type="line"
        width="100%"
        height="400"
      />
    </ChartContainer>
  )
};

export default LineChart;
