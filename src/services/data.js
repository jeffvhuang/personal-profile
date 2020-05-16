const details = {
  title: 'Jeffrey Huang',
  subtitle: 'Software Developer',
  linkedin: 'https://www.linkedin.com/in/jeffvhuang/',
  github: 'https://github.com/jeffvhuang',
  email: 'jeffvh@outlook.com'
};

const projects = [
  {
    title: 'Recaura',
    imagePath: '../../public/images/project-management.jpg',
    link: 'https://www.recaura.com',
    github: 'https://github.com/jeffvhuang/Recaura',
    description: 'Physiotherapy note-taking application',
    highlights: ['TypeScript', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Docker', 'AWS']
  },
  {
    title: 'Task Manager',
    imagePath: '../../public/images/project-management.jpg',
    link: 'https://jeffvh-task-manager.herokuapp.com',
    github: 'https://github.com/jeffvhuang/task-manager',
    description: 'Simple task checklist application',
    highlights: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Heroku']
  },
  {
    title: 'PT Files',
    imagePath: '../../public/images/digital-hand.jpg',
    link: 'https://ptfiles.app',
    github: 'https://github.com/jeffvhuang/pt-files',
    description: 'Refactored Recaura project for different tech stack and architecture',
    highlights: ['TypeScript', 'React', 'Redux', '.NET Core', 'SQL', 'AWS', 'Clean Architecture', 'CQRS']
  },
  {
    title: 'Lets Chat',
    imagePath: '../../public/images/chat-bubbles.jpg',
    link: 'https://jeffvh-lets-chat.herokuapp.com/',
    github: 'https://github.com/jeffvhuang/lets-chat',
    description: 'Real time chat application',
    highlights: ['Node.js', 'Express', 'Socket.io', 'Heroku']
  }
];

module.exports = {
  details,
  projects
};
