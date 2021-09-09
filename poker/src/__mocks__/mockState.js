const mockRooms = [
  {
    roomId: 1,
    users: [
      { userId: 1, name: 'Stephan', surname: 'Nazarenko', jobPosition: 'SmartBoy' },
      { userId: 2, name: 'Devid', surname: 'Blain', jobPosition: 'Designer' },
      { userId: 3, name: 'Teodor', surname: 'Ferdyshcenko', jobPosition: 'Clicker' },
    ],
    issues: [{ issueId: 1 }, { issueId: 2 }, { issueId: 3 }],
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
  },
];

export default mockRooms;
