// Remove this component after moving code to the real component
import React, { FC } from 'react';
import io from 'socket.io-client';

// import { SocketContext } from '../../socketContext';

// const TESTsocket: FC = () => {
//   const socket = useContext(SocketContext);

//   const handleOnClick = () => {
//     console.log('in handleOnClick');
//     const user = {
//       firstName: 'User firstName',
//       lastName: 'User firstName',
//       job: 'User firstName',
//       role: 'User firstName',
//     };
//     const room = '123456789';

//     socket.emit('login', { user, room }, (error: any) => {
//       if (error) {
//         console.log(error);
//       }
//       console.log(`Welcome to room ${room}`);
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleOnClick}>Confirm</button>
//     </div>
//   );
// };

const TESTsocket: FC = () => {
  const endpoint = process.env.REACT_APP_SOCKET_ENDPOINT || 'no endpoint';

  console.log('endpoint', endpoint);

  const socket = io(endpoint, { transports: ['websocket', 'polling'] });
  console.log('socket', socket);

  const handleOnClick = () => {
    console.log('in handleOnClick');
    const user = {
      firstName: 'User firstName',
      lastName: 'User lastName',
      job: 'User job',
      role: 'User role',
    };
    const room = '123456789';

    socket.emit('login', { user, room }, (error: any) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Welcome to room ${room}`);
      }
    });
  };

  return (
    <div>
      <button onClick={handleOnClick}>Confirm</button>
    </div>
  );
};

export default TESTsocket;
