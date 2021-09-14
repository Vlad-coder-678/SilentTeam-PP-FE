/* eslint-disable max-len */
import React, { FC } from 'react';
import styled from './CardIssue.module.scss';

interface Props {
  issueId?: number;
  isNew?: boolean;
}

const CardIssue: FC<Props> = ({ issueId, isNew }) => (
  <div className={styled.cardIssue_wrap}>
    {isNew ? (
      <div className={styled.cardIssue_item}>
        <h3>Create new issue</h3>
        <button type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
          </svg>
        </button>
      </div>
    ) : (
      <div className={styled.cardIssue_item}>
        <h3>Issue {issueId}</h3>
        <p>Low property</p>
        <div className={styled.cardIssue_item_buttons}>
          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z" />
            </svg>
          </button>
          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="red"
                d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    )}
  </div>
);

export default CardIssue;
