const mockRooms = [
  {
    roomId: 1,
    users: [
      { userId: 1, name: 'Stephan', surname: 'Nazarenko', jobPosition: 'SmartBoy' },
      { userId: 2, name: 'Devid', surname: 'Blain', jobPosition: 'Designer' },
      { userId: 3, name: 'Teodor', surname: 'Ferdyshcenko', jobPosition: 'Clicker' },
    ],
    issues: [{ issueId: 1 }, { issueId: 2 }, { issueId: 3 }],
    cards: [{ value: 'coffetime' }, { value: 0 }, { value: 1 }, { value: 5 }, { value: 10 }, { value: 20 }],
  },
  {
    roomId: 2,
    users: [
      { userId: 1, name: 'Stephan', surname: 'Nazarenko', jobPosition: 'SmartBoy' },
      { userId: 2, name: 'David', surname: 'Blain', jobPosition: 'Designer' },
      { userId: 3, name: 'Teodor', surname: 'Ferdyshcenko', jobPosition: 'Clicker' },
      { userId: 4, name: 'Jonathan', surname: 'Petrovich', jobPosition: 'Deployshik' },
      { userId: 5, name: 'Habib', surname: 'Sagitovich', jobPosition: 'Refluxor' },
    ],
    issues: [{ issueId: 1 }, { issueId: 2 }, { issueId: 3 }],
    cards: [{ value: 'coffetime' }, { value: 0 }, { value: 1 }, { value: 5 }, { value: 10 }, { value: 20 }],
  },
];

export default mockRooms;
