import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from '../../redux/store';
import CardGameLobby from './CardGameLobby';

describe('CardGameLobby component tests', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    const MyComponent = ({ minValue = 0, maxValue = 1000 }): JSX.Element => (
      <Provider store={store}>
        <CardGameLobby card={{ id: '0', value: '10' }} minValue={minValue} maxValue={maxValue} />
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
