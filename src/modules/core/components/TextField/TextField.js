import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import styles from './TextField.module.scss';

const TextField = ({
  name,
  onChange = noop,
  type = 'text',
}) => {
  const onChangeHandler = useCallback(e => onChange(e.target.value), [onChange]);

  return (
    <div className={styles.container}>
      <label
        className={styles.label}
        htmlFor={name}
      >
        {name}
      </label>
      <input
        className={styles.input}
        id={name}
        type={type}
        onChange={onChangeHandler}
      />
    </div>
  )
};

TextField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default TextField;
