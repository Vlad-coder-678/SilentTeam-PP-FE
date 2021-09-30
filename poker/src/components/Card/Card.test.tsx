import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import { store } from '../../redux/store';
import Card from './Card';
import { SIZES } from '../../types/common';

describe('Card', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    const MyComponent = (): JSX.Element => (
      <Provider store={store}>
        <Card card={{ id: '0', value: '10' }} isShowCards={true} size={SIZES.SMALL} />
      </Provider>
    );
    ReactDOM.render(<MyComponent />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('Renders correctly initial document', () => {
    const p = container.querySelectorAll('p');
    expect(p).toHaveLength(2);
  });
});
