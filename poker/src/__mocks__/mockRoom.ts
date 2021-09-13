import { ROLES } from '../types/common';

export const admin = { userId: '1', name: 'Stephan', surname: 'Nazarenko', jobPosition: 'SmartBoy', role: ROLES.ADMIN };

const mockRoom = {
  roomId: 2,
  users: [
    // { userId: '2', name: 'David', surname: 'Blain', jobPosition: 'Designer', role: ROLES.USER },
    // { userId: '3', name: 'Teodor', surname: 'Ferdyshcenko', jobPosition: 'Clicker', role: ROLES.OBSERVER },
    // { userId: '4', name: 'Jonathan', surname: 'Petrovich', jobPosition: 'Deployshik', role: ROLES.USER },
    // { userId: '5', name: 'Habib', surname: 'Sagitovich', jobPosition: 'Refluxor', role: ROLES.USER },
    {
      userId: '11112',
      name: 'Devid',
      surname: 'Blain',
      role: ROLES.USER,
    },
    {
      userId: '11113',
      name: 'Den',
      surname: '',
      role: ROLES.USER,
    },
    {
      userId: '11114',
      name: 'Stephan',
      surname: 'Naz',
      role: ROLES.USER,
    },
    {
      userId: '11115',
      name: 'Teodor',
      surname: 'Ferdyshcenkov',
      role: ROLES.OBSERVER,
    },
  ],
  issues: [{ issueId: 1 }, { issueId: 2 }, { issueId: 3 }],
  cards: [{ value: 'coffetime' }, { value: 0 }, { value: 1 }, { value: 5 }, { value: 10 }, { value: 20 }],
};

export default mockRoom;
