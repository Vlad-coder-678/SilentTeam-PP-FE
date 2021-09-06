import React, { FC, useState, useEffect } from 'react';

import styles from './ConnectToLobby.module.scss';

interface errorProps {
    firstName: string;
    lastName: string;
    jobPosition: string;
}

const ConnectToLobby: FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [jobPosition, setJobPosition] = useState<string>('');
  const [error, setError] = useState<errorProps>({ firstName: '', lastName: '', jobPosition: '' });
  const [observer, setObserver] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    validate();
  }, [firstName, lastName, jobPosition]);

  const validate = () => {
    if (firstName === '') {
      setError((state) => ({ ...state, firstName }));
    }
    if (lastName === '') {
      setError((state) => ({ ...state, lastName }));
    }
    if (jobPosition === '') {
      setError((state) => ({ ...state, jobPosition }));
    }
  };

  const handelSubmit = () => {
    console.log('send form');
  };

  return (
    <form className={styles.Form_wrap} onSubmit={handelSubmit}>
        <div className={styles.Form_body}>
            <div className="persanal-data">
                <h1>Connet to lobby</h1>
                <label className={styles.Form_item} htmlFor={firstName}>
                    <p>
                        Your First Name:
                        {error?.firstName && (
                            <span className={styles.Error}> Should be fill</span>
                        )}
                    </p>
                    <input
                        type="text"
                        name={firstName}
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </label>
                <label className={styles.Form_item} htmlFor={lastName}>
                    <p>
                        Your Last Name:
                        {error?.lastName && (
                            <span className={styles.Error}> Should be fill</span>
                        )}
                    </p>
                    <input
                        type="text"
                        name={lastName}
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </label>
                <label className={styles.Form_item} htmlFor={jobPosition}>
                    <p>
                        Your job position:
                        {error?.jobPosition && (
                            <span className={styles.Error}> Should be fill</span>
                        )}
                    </p>
                    <input
                        type="text"
                        name={jobPosition}
                        value={jobPosition}
                        onChange={(event) => setJobPosition(event.target.value)}
                    />
                </label>
                <label className={styles.Form_item} htmlFor={image}>
                    Image:
                    <input className={styles.Button_blue} type="file"/>
                </label>
            </div>
            <div className={styles.Is_observer}>
                <label className="observer" htmlFor="observer">
                    <p>
                        Connect as Observer
                    </p>
                    <input
                        type="checkbox"
                        name="observer"
                        onChange={() => setObserver((prev) => !prev)}
                    />
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
