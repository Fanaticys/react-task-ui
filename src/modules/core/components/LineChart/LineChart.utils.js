export const generateOptions = chunks => ({
  chart: {
    id: 'line',
  },
  title: {
    text: 'Line Chart',
    align: 'center',
    style: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#4A60D7',
    },
  },
  xaxis: {
    categories: chunks.map(chunk => chunk.time),
  },
  yaxis: {
    min: -100,
    max: 100,
    decimalsInFloat: 0,
  },
  tooltip: {
    y: {
      formatter: value => value,
    },
  },
});

export const generateSeries = chunks => [{
  name: 'value',
  data: chunks.map(chunk => chunk.value),
}];
