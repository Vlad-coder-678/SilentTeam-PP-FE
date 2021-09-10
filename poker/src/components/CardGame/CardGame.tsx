/* eslint-disable max-len */
import React, { FC } from 'react';
import styled from './CardGame.module.scss';

interface Props {
  value?: string | number;
  isNew?: boolean;
  isSelected?: boolean;
  isConfig?: boolean;
}

const CardGame: FC<Props> = ({ value, isNew, isSelected, isConfig }) => {
  const handleCreateNewCard = () => {
    console.log('create new card');
  };

  const handleChangeValue = () => {
    console.log('change value');
  };

  const handleChangeSelected = () => {
    console.log('change selected');
  };

  return (
    <div className={isSelected ? styled.Card_wrap_selected : styled.Card_wrap}>
      {isNew && (
        <div className={styled.Card_new} onClick={handleCreateNewCard}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
          </svg>
        </div>
      )}
      {typeof value === 'string' && (
        <div className={styled.Card_coffeetime}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M13 20h-7c-2.174-3.004-4-6.284-4-12h15c0 5.667-1.88 9.089-4 12zm5.119-10c-.057.701-.141 1.367-.252 2h1.55c-.449 1.29-1.5 2.478-2.299 2.914-.358 1.038-.787 1.981-1.26 2.852 3.274-1.143 5.846-4.509 6.142-7.766h-3.881zm-7.745-3.001c4.737-4.27-.98-4.044.117-6.999-3.783 3.817 1.409 3.902-.117 6.999zm-2.78.001c3.154-2.825-.664-3.102.087-5.099-2.642 2.787.95 2.859-.087 5.099zm9.406 15h-15v2h15v-2z" />
          </svg>
        </div>
      )}
      {typeof value === 'number' && (
        <div className={styled.Card_value} onClick={isConfig ? handleChangeValue : handleChangeSelected}>
          <p className={styled.Card_value_top}>{value}</p>
          {isConfig ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z" />
            </svg>
          ) : (
            <h2>'SP'</h2>
          )}
          <p className={styled.Card_value_bottom}>{value}</p>
        </div>
      )}
    </div>
  );
};

export default CardGame;
