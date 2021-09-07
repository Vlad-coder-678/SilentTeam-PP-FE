import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import InputComponent from '../InputComponent/InputComponent';

import styles from './ConnectToLobby.module.scss';

interface FormState {
  firstName: string;
  lastName: string;
  jobPosition: string;
}

const ConnectToLobby: FC = () => {
  const [error, setError] = useState<FormState>({ firstName: '', lastName: '', jobPosition: '' });
  const [persanalData, setPersanalData] = useState<FormState>({ firstName: '', lastName: '', jobPosition: '' });
  const [observer, setObserver] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    validate();
  }, [persanalData]);

  const validate = () => {
    const { firstName, lastName, jobPosition } = persanalData;

    if (persanalData.firstName === '') {
      setError((state) => ({ ...state, firstName }));
    }
    if (persanalData.lastName === '') {
      setError((state) => ({ ...state, lastName }));
    }
    if (persanalData.jobPosition === '') {
      setError((state) => ({ ...state, jobPosition }));
    }
  };

  const handelSubmit = () => {
    console.log('send form');
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPersanalData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form className={styles.Form_wrap} onSubmit={handelSubmit}>
      <div className={styles.Form_body}>
        <div className="persanal-data">
          <h1>Connet to lobby</h1>
          <label className={styles.Form_item} htmlFor={'firstName'}>
            <p>
              Your First Name:
              {error?.firstName && <span className={styles.Error}> Should be fill</span>}
            </p>
            <InputComponent value={persanalData.firstName} name={'firstName'} onChange={handleInputChange} />
          </label>
          <label className={styles.Form_item} htmlFor={'lastName'}>
            <p>
              Your Last Name:
              {error?.lastName && <span className={styles.Error}> Should be fill</span>}
            </p>
            <InputComponent value={persanalData.lastName} name={'lastName'} onChange={handleInputChange} />
          </label>
          <label className={styles.Form_item} htmlFor={'jobPosition'}>
            <p>
              Your job position:
              {error?.jobPosition && <span className={styles.Error}> Should be fill</span>}
            </p>
            <InputComponent value={persanalData.jobPosition} name={'jobPosition'} onChange={handleInputChange} />
          </label>
          <label className={styles.Form_item} htmlFor={image}>
            Image:
            <input className={styles.Button_blue} type="file" />
          </label>
        </div>
        <div className={styles.Is_observer}>
          <label className="observer" htmlFor="observer">
            <p>Connect as Observer</p>
            <input type="checkbox" name="observer" onChange={() => setObserver((prev) => !prev)} />
          </label>
        </div>
      </div>
      <div className="buttons">
        <input type="submit" className={styles.Button_blue} value="Confirm" />
        <input type="submit" value="Cancel" />
      </div>
    </form>
  );
};

export default ConnectToLobby;
