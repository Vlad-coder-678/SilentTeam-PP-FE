// Remove this component after moving code to the real component
import React, { FC } from 'react';
import { Socket } from 'socket.io-client/build/socket';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

import { SocketContext } from '../../socketContext';

const TESTsocket: FC = () => {
  const socket = React.useContext<Socket<DefaultEventsMap, DefaultEventsMap>>(SocketContext);

  const handleOnClick = (): void => {
    console.log('in handleOnClick');
    const user = {
      firstName: 'User firstName1',
      lastName: 'User lastName1',
      job: 'User job1',
      role: 'User role1',
    };
    const room = '123456789';
    socket.emit('login', { user, room }, (response: unknown) => {
      console.log(response);
    });
  };

  return <button onClick={handleOnClick}>Confirm</button>;
};

export default TESTsocket;
