import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import kickIcon from '../../assets/images/kick.svg';
import { setIsModalCallFromServer, setIsModalOpen } from '../../redux/slices/kickSlice';
import { SIZES } from '../../types/common';

import styles from './KickButton.module.scss';

interface Props {
  size: SIZES;
}

const KickButton: FC<Props> = ({ size }) => {
  const dispatch = useDispatch();

  const handleOnKickUser = () => {
    dispatch(setIsModalOpen(true));
    dispatch(setIsModalCallFromServer(false));
  };

  return <img className={styles[size]} src={kickIcon} alt="kick" onClick={handleOnKickUser} />;
};

export default KickButton;
