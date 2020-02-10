import React from 'react';

import useCloseSocket from 'modules/socket/hooks/useCloseSocket';
import ThresholdField from 'modules/core/components/ThresholdField';
import LineChart from 'modules/core/components/LineChart';
import BarChart from 'modules/core/components/BarChart';

import styles from './Main.module.scss';

const Main = () => {
  useCloseSocket();

  return (
    <div className={styles.container}>
      <ThresholdField />
      <LineChart />
      <BarChart />
    </div>
  )
}

export default Main;