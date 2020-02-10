import { useEffect } from 'react';

import provideSocket from '../providers/provideSocket';

const useSocketListener = (listener) => {
  useEffect(() => {
    const socket = provideSocket();
    socket.on('data', listener);

    return () => {
      socket.removeListener('data', listener);
    };
  }, [listener]);
};

export default useSocketListener;