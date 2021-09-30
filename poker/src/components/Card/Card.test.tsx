import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import Card from './Card';
import { store } from '../../redux/store';
import { SIZES } from '../../types/common';

const cardInit = { id: '0', value: '10' };

const wrapper = shallow(
  <Provider store={store}>
    <Card card={cardInit} isShowCards={true} size={SIZES.SMALL} />
  </Provider>,
);

console.log(wrapper);
expect(wrapper.find('p').first().text()).toEqual(cardInit.value);
expect(wrapper.props().card).toEqual(cardInit);
