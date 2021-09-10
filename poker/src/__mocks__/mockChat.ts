import { ROLES } from '../types/common';

// const mockCurrentUserId = '11111';
// const mockCurrentRole = 'admin';

const mockCurrentUserId = '11112';
const mockCurrentRole = 'user';

const mockChat = [
  {
    userId: '11111',
    firstName: 'Stephan',
    lastName: 'Nazarenko',
    role: ROLES.ADMIN,
    message: 'Hi :)',
  },
  {
    userId: '11112',
    firstName: 'Devid',
    lastName: 'Blain',
    role: ROLES.USER,
    message: 'Hello everyone!',
  },
  {
    userId: '11113',
    firstName: 'Den',
    lastName: '',
    role: ROLES.USER,
    message: 'Hi. Hi. What do you think about our issue 123?',
  },
  {
    userId: '11111',
    firstName: 'Stephan',
    lastName: 'Nazarenko',
    role: ROLES.ADMIN,
    message: "Guys, let's talk about it in the game",
  },
  {
    userId: '11115',
    firstName: 'Teodorooooooooooo',
    lastName: 'Ferdyshcenkovvvvvvvv',
    role: ROLES.OBSERVER,
    message: 'Ok',
  },
  { userId: '11116', firstName: 'Bob', lastName: 'Blain', role: ROLES.USER, message: 'Hi :)' },
];

const mockChatInput = {
  firstName: 'Den',
  lastName: '',
  role: ROLES.USER,
};

export { mockChat, mockCurrentUserId, mockChatInput, mockCurrentRole };
