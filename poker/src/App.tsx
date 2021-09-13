import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { SocketContext } from './socketContext';
import { SocketError } from './types/common';
import { setSocketError } from './redux/slices/socketErrorSlice';

const App: FC = () => {
  const socket = React.useContext(SocketContext);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const updateChatSuccess = (response: SocketError) => {
      dispatch(setSocketError(response));
    };

    socket.on('error', updateChatSuccess);

    return () => {
      socket.off('error', updateChatSuccess);
    };
  });

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
