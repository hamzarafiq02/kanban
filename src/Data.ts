import { v4 as uuidv4 } from 'uuid';

const mockData = [
  {
    id: uuidv4(),
    title: ' 📃 Active',
    tasks: [
      {
        id: uuidv4(),
        title: 'Task 1 is here.'
      },
      {
        id: uuidv4(),
        title: 'Task 2 is here.'
      },
      {
        id: uuidv4(),
        title: 'Task 3 is here.'
      },
    ]
  },
  {
    id: uuidv4(),
    title: ' ✏️ Cancel',
    tasks: [
      {
        id: uuidv4(),
        title: 'Task 4 is here.'
      },
      {
        id: uuidv4(),
        title: 'Task 5 is here.'
      }
    ]
  },
  {
    id: uuidv4(),
    title: ' ✔️ Completed',
    tasks: [
      {
        id: uuidv4(),
        title: 'Task 6 is here.'
      }
    ]
  }
];

export default mockData;