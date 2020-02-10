import React, { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import useSocketListener from 'modules/socket/hooks/useSocketListener';

import TextField from '../TextField';

import styles from './ThresholdField.module.scss';

const ThresholdField = () => {
  const [threshold, setThreshold] = useState('');

  const handleSocketData = useCallback(
    ({ value } = {}) => {
      if (threshold && value > threshold) toast(value);
    },
    [threshold],
  );

  useSocketListener(handleSocketData);

  return (
    <div className={styles.container}>
      <TextField
        name='Alert threshold'
        type='number'
        onChange={setThreshold}
      />
    </div>
  );
}

export default ThresholdField;