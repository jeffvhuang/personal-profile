const details = {
  title: 'Jeffrey Huang',
  subtitle: 'Software Developer',
  linkedin: 'https://www.linkedin.com/in/jeffvhuang/',
  github: 'https://github.com/jeffvhuang',
  email: 'jeffvh@outlook.com'
};

const titles = {
  recaura: 'Recaura',
  task: 'Task Manager',
  ptfiles: 'PT Files',
  chat: 'Lets Chat'
};

const projects = [
  {
    title: titles.recaura,
    link: 'https://www.recaura.com',
    github: 'https://github.com/jeffvhuang/Recaura',
    description:
      'Note-taking app for health professionals. Test login: user@example.com, PW: testpw123',
    highlights: ['TypeScript', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Docker', 'AWS']
  },
  {
    title: titles.task,
    link: 'https://jeffvh-task-manager.herokuapp.com',
    github: 'https://github.com/jeffvhuang/task-manager',
    description:
      'Simple task checklist application. Test login: testuser@example.com, PW: Test123$',
    highlights: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Heroku']
  },
  {
    title: titles.ptfiles,
    link: 'https://ptfiles.app',
    github: 'https://github.com/jeffvhuang/pt-files',
    description: 'Refactored Recaura project for different tech stack and architecture',
    highlights: [
      'TypeScript',
      'React',
      'Redux',
      '.NET Core',
      'SQL',
      'AWS',
      'Clean Architecture',
      'CQRS'
    ]
  },
  {
    title: titles.chat,
    link: 'https://jeffvh-lets-chat.herokuapp.com/',
    github: 'https://github.com/jeffvhuang/lets-chat',
    description: 'Real time chat application',
    highlights: ['Node.js', 'Express', 'Socket.io', 'Heroku']
  }
];

module.exports = {
  details,
  projects,
  titles
};
