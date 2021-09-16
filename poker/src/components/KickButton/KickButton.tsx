import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import kickIcon from '../../assets/images/kick.svg';
import {
  setIsModalOpen,
  setIsModalOpenBySocketEvent,
  setWhoKick,
  setWhoWillBeKicked,
} from '../../redux/slices/kickSlice';
import { ROLES, SIZES } from '../../types/common';
import { mockCurrentUser } from '../../__mocks__/mockKick';

import styles from './KickButton.module.scss';

interface Props {
  size: SIZES;
  userId: string;
  firstName: string;
  lastName?: string;
  role: ROLES;
}

const KickButton: FC<Props> = ({ size, userId, firstName, lastName, role }) => {
  const dispatch = useDispatch();
  const currentUser = mockCurrentUser;
  const kickedUser = { userId, firstName, lastName, role };

  const handleOnKickUser = (): void => {
    dispatch(setWhoKick(currentUser));
    dispatch(setWhoWillBeKicked(kickedUser));
    dispatch(setIsModalOpenBySocketEvent(false));
    dispatch(setIsModalOpen(true));
  };

  return <img className={styles[size]} src={kickIcon} alt="kick" onClick={handleOnKickUser} />;
};

export default KickButton;
