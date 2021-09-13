import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import GeneralButton from '../GeneralButton/GeneralButton';
import { isModalCallFromServerSlice, setIsModalOpen } from '../../redux/slices/kickSlice';
import { SocketContext } from '../../socketContext';
import { KICKED_MESSAGES, ROLES } from '../../types/common';
import { mockCurrentUser, mockWhoWillBeKicked, mockRoom } from '../../__mocks__/mockKick';
import TESTsocket from '../TESTsocket/TESTsocket';

import styles from './KickModal.module.scss';

const KickModal: FC = () => {
  const currentRoom = mockRoom;
  const currentUser = mockCurrentUser;
  const whoWillBeKicked = mockWhoWillBeKicked;
  const dispatch = useDispatch();

  const socket = React.useContext(SocketContext);

  const isModalCallFromServer = useSelector(isModalCallFromServerSlice);

  const handleClickConfirm = () => {
    // 1 если админ - послать сообщение удалить юзера и отправить сообщение в чат
    if (currentUser.role === ROLES.ADMIN) {
      const payload = {
        room: currentRoom,
        message: KICKED_MESSAGES.BY_ADMIN,
        userId: whoWillBeKicked.id,
        firstName: whoWillBeKicked.firstName,
        lastName: whoWillBeKicked.lastName,
        role: whoWillBeKicked.role,
      };
      socket.emit('kick-user-by-admin', payload);
      dispatch(setIsModalOpen(false));
    }
    // eslint-disable-next-line max-len
    // 2 если юзер и окно открыто с клиента - послать сообщение всем юзерам для голосования (кроме выбранного для кика юзера)
    // 3 если юзер и окно открыто с сервера - послать результат выбора на сервер
    // 4 на сервере, когда более 50% юзеров комнаты проголосовало против - удалить юзера и отправить сообщение в чат

    // закрыть окно
  };

  const handleClickCancel = () => {
    dispatch(setIsModalOpen(false));
  };

  return (
    <div className={styles.wrap}>
      <TESTsocket />
      <div className={styles.modal}>
        <h2 className={styles.header}>Kick Player?</h2>
        {isModalCallFromServer ? (
          <p className={styles.text}>
            <span className={styles.name}>
              {currentUser.firstName} {currentUser.lastName} {}
            </span>
            want to kick member {}
            <span className={styles.name}>
              {whoWillBeKicked.firstName} {whoWillBeKicked.lastName}. {}
            </span>
            Do you agree with it?
          </p>
        ) : (
          <p className={styles.text}>
            Are you really want to remove player {}
            <span className={styles.name}>
              {whoWillBeKicked.firstName} {}
              {whoWillBeKicked.lastName} {}
            </span>
            from game session?
          </p>
        )}
        <div className={styles.buttons}>
          <button className={styles.yes} onClick={handleClickConfirm}>
            Yes
          </button>
          <button className={styles.no} onClick={handleClickCancel}>
            No
          </button>
          {/* <GeneralButton type="button" label={'Yes'} onClick={handleClickConfirm} primaryBG />
          <GeneralButton type="button" label={'No'} onClick={handleClickCancel} /> */}
        </div>
      </div>
    </div>
  );
};

export default KickModal;
