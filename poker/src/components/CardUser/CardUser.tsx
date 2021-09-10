import React, { FC } from 'react';
import styled from './CardUser.module.scss';

export interface userProps {
  name: string;
  surname?: string | undefined;
  jobPosition?: string | undefined;
}

const CardUser: FC<userProps> = ({ name, surname, jobPosition }) => {
  const handleClickKickUser = () => {
    console.log("I'll kick you");
  };

  return (
    <div className={styled.CardUser_wrap}>
      <div className={styled.CardUser_ava}>
        <p>{surname ? `${name[0]}${surname[0]}` : `${name[0]}${name[name.length - 1]}`}</p>
      </div>
      <div className={styled.CardUser_fullName}>
        {surname && <p className={styled.CardUser_surname}>{surname}</p>}
        <h3>{name}</h3>
        {jobPosition && <p className={styled.CardUser_job}>{jobPosition}</p>}
      </div>
      <div className={styled.CardUser_kickButtonWrapper}>
        <button className={styled.CardUser_kickButton} onClick={handleClickKickUser}></button>
      </div>
    </div>
  );
};

export default CardUser;
