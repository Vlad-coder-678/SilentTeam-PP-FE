import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar';
import { ROLES, SIZES } from '../../types/common';

describe('Avatar component tests', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Avatar role={ROLES.ADMIN} size={SIZES.SMALL} firstName={'Andrey'} />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  test('Renders correctly initial document', () => {
    const p = container.querySelectorAll('p');
    expect(p).toHaveLength(1);
  });
});
