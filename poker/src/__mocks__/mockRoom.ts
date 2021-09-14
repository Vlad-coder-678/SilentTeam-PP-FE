import { ROLES } from '../types/common';

export const admin = {
  userId: '1',
  firstName: 'Stephan',
  lastName: 'Nazarenko',
  jobPosition: 'SmartBoy',
  role: ROLES.ADMIN,
};

const mockRoom = {
  roomId: '2',
  users: [
    // { userId: '2', firstName: 'David', lastName: 'Blain', jobPosition: 'Designer', role: ROLES.USER },
    // { userId: '3', firstName: 'Teodor', lastName: 'Ferdyshcenko', jobPosition: 'Clicker', role: ROLES.OBSERVER },
    // { userId: '4', firstName: 'Jonathan', lastName: 'Petrovich', jobPosition: 'Deployshik', role: ROLES.USER },
    // { userId: '5', firstName: 'Habib', lastName: 'Sagitovich', jobPosition: 'Refluxor', role: ROLES.USER },
    {
      userId: '11112',
      firstName: 'Devid',
      lastName: 'Blain',
      role: ROLES.USER,
    },
    {
      userId: '11113',
      firstName: 'Den',
      lastName: '',
      role: ROLES.USER,
    },
    {
      userId: '11114',
      firstName: 'Stephan',
      lastName: 'Naz',
      role: ROLES.USER,
    },
    {
      userId: '11115',
      firstName: 'Teodor',
      lastName: 'Ferdyshcenkov',
      role: ROLES.OBSERVER,
    },
  ],
  issues: [{ issueId: '1' }, { issueId: '2' }, { issueId: '3' }],
  cards: [{ value: 'coffetime' }, { value: 0 }, { value: 1 }, { value: 5 }, { value: 10 }, { value: 20 }],
};

export default mockRoom;
