import { useEffect } from 'react';

import provideSocket from '../providers/provideSocket';

const useCloseSocket = () => {
  useEffect(() => {
    const socket = provideSocket();
    return socket.close;
  }, []);
}

export default useCloseSocket;
