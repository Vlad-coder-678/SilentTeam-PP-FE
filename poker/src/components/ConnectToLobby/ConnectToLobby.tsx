import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import GeneralButton from '../GeneralButton/GeneralButton';
import InputComponent from '../InputComponent/InputComponent';
import Checkbox from '../Checkbox/Checkbox';

import styles from './ConnectToLobby.module.scss';

interface FormState {
  firstName: string;
  lastName: string;
  jobPosition: string;
}

interface Props {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConnectToLobby: FC<Props> = ({ setIsVisible }) => {
  const [error, setError] = useState<FormState>({
    firstName: '',
    lastName: '',
    jobPosition: '',
  });
  const [persanalData, setPersanalData] = useState<FormState>({
    firstName: '',
    lastName: '',
    jobPosition: '',
  });
  // const [observer, setObserver] = useState<boolean>(false);
  // const [image, setImage] = useState<string>('');

  useEffect(() => {
    validate();
  }, [persanalData]);

  const validate = () => {
    const { firstName } = persanalData;
    if (firstName === '') {
      setError((state) => ({ ...state, firstName }));
    }
  };

  const handelSubmit = () => {
    console.log('send form');
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPersanalData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClickConfirm = () => {
    setIsVisible(false);
  };

  const handleClickCancel = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={styles.Form_wrap}
      onClick={() => {
        setIsVisible(false);
      }}
    >
      <form
        className={styles.Form}
        onSubmit={handelSubmit}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.Form_header}>
          <h2>Connect to lobby</h2>
          <div className={styles.Form_wrap_checkbox_big_screen}>
            <label className={styles.Form_is_observer} htmlFor="observer">
              Connect as Observer
            </label>
            <Checkbox
              name="observer"
              // value={observer}
              // onChange={() => setObserver((prev) => !prev)}
            />
          </div>
        </div>

        <div className={styles.Form_body}>
          <label htmlFor={'firstName'}>
            Your First Name:
            {error?.firstName && (
              <span className={styles.Form_error}> Should be fill</span>
            )}
          </label>
          <InputComponent
            value={persanalData.firstName}
            name={'firstName'}
            onChange={handleInputChange}
          />
          <label htmlFor={'lastName'}>Your Last Name:</label>
          <InputComponent
            value={persanalData.lastName}
            name={'lastName'}
            onChange={handleInputChange}
          />
          <label htmlFor={'jobPosition'}>Your job position:</label>
          <InputComponent
            value={persanalData.jobPosition}
            name={'jobPosition'}
            onChange={handleInputChange}
          />
          {/* <label htmlFor={image}>
            Image:
            <input className={styles.Button_blue} type="file" />
          </label> */}
          <div className={styles.Form_wrap_checkbox_small_screen}>
            <label className={styles.Form_is_observer} htmlFor="observer">
              Connect as Observer
            </label>
            <Checkbox
              name="observer"
              // value={observer}
              // onChange={() => setObserver((prev) => !prev)}
            />
          </div>
        </div>

        <div className={styles.Form_footer}>
          <GeneralButton
            type="submit"
            label={'Confirm'}
            onClick={handleClickConfirm}
            primaryBG
          />
          <GeneralButton label={'Cancel'} onClick={handleClickCancel} />
        </div>
      </form>
    </div>
  );
};

export default ConnectToLobby;
