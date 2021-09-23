import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import GeneralButton from '../GeneralButton/GeneralButton';
import InputComponent from '../InputComponent/InputComponent';
import TitleSection from '../TitleSection/TitleSection';
import { Issue } from '../../types/common';
import { fixIs, removeIs } from '../../redux/slices/issuesSlice';

import styles from './CardIssueModal.module.scss';

interface Props {
  setIsOpen: (e: boolean) => void;
  issue: Issue;
  option?: string;
}

const CardIssueModal: FC<Props> = ({ setIsOpen, issue, option }) => {
  const dispatch = useDispatch();

  const handleOnChangeIssueTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(fixIs({ ...issue, title: e.target.value }));
  };

  const handleOnChangeIssueDesc = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(fixIs({ ...issue, desc: e.target.value }));
  };

  const handleClickCancel = (): void => {
    setIsOpen(false);
  };

  const handelSubmit = (): void => {
    if (option === 'remove') dispatch(removeIs(issue));
    setIsOpen(false);
  };

  return (
    <div className={styles.issue_modal_wrap} onClick={handleClickCancel}>
      <form
        className={styles.issue_modal_form}
        onClick={(e): void => {
          e.stopPropagation();
        }}
        onSubmit={handelSubmit}
      >
        {option === 'remove' ? (
          <TitleSection title="Are you sure about that?" isCapitalLetters />
        ) : (
          <>
            <TitleSection title="Enter issue specification" isCapitalLetters />
            <label className={styles.modal_issueTitle} htmlFor="issueTitle">
              Enter title
            </label>
            <InputComponent name="issueTitle" value={issue.title} onChange={handleOnChangeIssueTitle} />
            <label className={styles.modal_issueDesc} htmlFor="issueTitle">
              Enter description
            </label>
            <InputComponent name="issueDesc" value={issue.desc} onChange={handleOnChangeIssueDesc} />
          </>
        )}

        <div className={styles.issue_modal_footer}>
          <GeneralButton type="submit" label={'Accept'} primaryBG />
          <GeneralButton type="button" label={'Cancel'} onClick={handleClickCancel} />
        </div>
      </form>
    </div>
  );
};

export default CardIssueModal;
