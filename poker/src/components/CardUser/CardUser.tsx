import React, { FC } from 'react';
import { ROLES, SIZES } from '../../types/common';
import Avatar from '../Avatar/Avatar';
import KickButton from '../KickButton/KickButton';
import styles from './CardUser.module.scss';

export interface userProps {
  name: string;
  surname?: string;
  jobPosition?: string;
  role: ROLES;
}

const CardUser: FC<userProps> = ({ name, surname, jobPosition, role }) => (
  <div className={styles.CardUser_wrap}>
    <Avatar size={SIZES.MEDIUM} firstName={name} lastName={surname} role={role} />
    <div className={styles.CardUser_fullName}>
      {surname && <p className={styles.CardUser_surname}>{surname}</p>}
      <h3>{name}</h3>
      {jobPosition && <p className={styles.CardUser_job}>{jobPosition}</p>}
    </div>
    <div className={styles.CardUser_kickButtonWrapper}>
      <KickButton size={SIZES.MEDIUM} />
    </div>
  </div>
);

export default CardUser;
