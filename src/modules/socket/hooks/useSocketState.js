import { useReducer, useCallback } from 'react';
import moment from 'moment';

import useSocketListener from 'modules/socket/hooks/useSocketListener';

const initialState = [];
const size = 50;
const ADD = 'ADD';

const reducer = (state, { type, payload }) => {
  if (type === ADD) {
    const newState = [...state, {
      value: payload.value,
      time: moment(payload.timestamp).format('HH:mm:ss'),
    }];
    if (newState.length > size) newState.shift();

    return newState;
  }

  return state;
}

const useSocketState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSocket = useCallback(
    payload => {
      dispatch({ type: ADD, payload });
    },
    [],
  );

  useSocketListener(handleSocket);

  return state;
};

export default useSocketState;