import { CATEGORIES } from './BarChart.constants';

const generateSeriesData = chunks =>
  chunks.reduce((acc, chunk) => {
    const index = CATEGORIES.findIndex(category =>
      chunk.value > category[0] && chunk.value < category[1],
    );

    if (index === -1) return acc;

    acc[index] = ++acc[index];
    return acc;
  },
    CATEGORIES.map(() => 0),
  );

export const generateSeries = chunks => [{
  name: 'value',
  data: generateSeriesData(chunks),
}];

export const generateOptions = () => ({
  chart: {
    id: 'bar',
  },
  title: {
    text: 'Bar Chart',
    align: 'center',
    style: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#00A876',
    },
  },
  xaxis: {
    categories: CATEGORIES.map(category => `${category[0]} - ${category[1]}`),
  },
  yaxis: {
    decimalsInFloat: 0,
    max: 20,
  },
  tooltip: {
    y: {
      formatter: value => value,
    },
  },
  dataLabels: {
    enabled: false,
  },
});