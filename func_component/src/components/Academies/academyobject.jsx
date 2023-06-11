import {v4 as uuidv4} from 'uuid';

const academies = [
    {
        id: uuidv4(),
        name: 'Academy for Programming',
        description: 'Learn to work as a full-stack developer using the newest modern technologies.'
    },
    {
        id: uuidv4(),
        name: 'Academy for DevOps',
        description: 'Unification and automation of processes, and  combining code, application maintenance, and application management.'
    },
    {
        id: uuidv4(),
        name: 'Academy for Data science',
        description: 'Find patterns and trends in datasets to uncover insights. Create algorithms and data models to forecast outcomes.'
    },
    {
        id: uuidv4(),
        name: 'Academy for Cyber security',
        description: 'Learn how to reduce the risk of a cyber attack.'
    }
];

export default academies;