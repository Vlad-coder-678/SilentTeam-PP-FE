import React, { FC } from 'react';
import { ROLES, SIZES } from '../../types/common';
import Avatar from '../Avatar/Avatar';
// import KickButton from '../KickButton/KickButton';
import styled from './CardUser.module.scss';

export interface userProps {
  name: string;
  surname?: string;
  jobPosition?: string;
  role: ROLES;
}

const CardUser: FC<userProps> = ({ name, surname, jobPosition, role }) => (
  <div className={styled.CardUser_wrap}>
    <Avatar size={SIZES.MEDIUM} firstName={name} lastName={surname} role={role} />
    <div className={styled.CardUser_fullName}>
      {surname && <p className={styled.CardUser_surname}>{surname}</p>}
      <h3>{name}</h3>
      {jobPosition && <p className={styled.CardUser_job}>{jobPosition}</p>}
    </div>
    <div className={styled.CardUser_kickButtonWrapper}>
      {/* <KickButton size={SIZES.MEDIUM} userId={userId} firstName={firstName} lastName={lastName} role={role} /> */}
    </div>
  </div>
);

export default CardUser;
