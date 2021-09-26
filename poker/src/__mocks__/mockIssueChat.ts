import { ROLES, Member } from '../types/common';

const mockRoom = '1234567';

const mockCurrentIssue = { id: '777', name: 'Issue 13' };

const mockCurrentUser: Member = {
  userId: '11112',
  firstName: 'Devid',
  lastName: 'Blain',
  role: ROLES.ADMIN,
};

// const mockCurrentUser: Member = {
//   userId: '11111',
//   firstName: 'Stephan',
//   lastName: 'Nazarenko',
//   role: ROLES.ADMIN,
// };

const mockCurrentAdmin: Member = {
  userId: '11111',
  firstName: 'Stephan',
  lastName: 'Nazarenko',
  role: ROLES.ADMIN,
};

const mockIssueChat = [
  {
    userId: '11111',
    firstName: 'Stephan',
    lastName: 'Nazarenko',
    role: ROLES.ADMIN,
    jobPosition: 'Team lead',
    value: '',
  },
  {
    userId: '11112',
    firstName: 'Devid',
    lastName: 'Blain',
    role: ROLES.USER,
    jobPosition: 'Clicker',
    value: '',
  },
  {
    userId: '11113',
    firstName: 'Den',
    lastName: '',
    role: ROLES.USER,
    jobPosition: 'Designer',
    value: '',
  },
  {
    userId: '11115',
    firstName: 'Teodor',
    lastName: 'Ferdyshcenko',
    role: ROLES.OBSERVER,
    jobPosition: 'Programmer',
    value: '',
  },
];

export { mockCurrentIssue, mockIssueChat, mockCurrentAdmin, mockCurrentUser, mockRoom };
