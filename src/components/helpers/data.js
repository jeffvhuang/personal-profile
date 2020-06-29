const details = {
  title: 'Jeffrey Huang',
  subtitle: 'Software Engineer',
  linkedin: 'https://www.linkedin.com/in/jeffvhuang/',
  github: 'https://github.com/jeffvhuang',
  email: 'jeffvh@outlook.com'
};

const titles = {
  recaura: 'Recaura',
  task: 'Task Manager',
  ptfiles: 'PT Files',
  chat: 'Lets Chat',
  gameon: 'Game On Client',
  gameonapi: 'Game On API'
};

const projects = [
  {
    title: titles.recaura,
    link: 'https://www.recaura.com',
    github: 'https://github.com/jeffvhuang/Recaura',
    description:
      'Note-taking app for health professionals. (Login: user@example.com & PW: testpw123)',
    highlights: ['TypeScript', 'React', 'Redux', 'Node.js', 'Express', 'NoSQL', 'Docker', 'AWS']
  },
  {
    title: titles.ptfiles,
    // link: 'https://ptfiles.app',
    link: 'https://github.com/jeffvhuang/pt-files',
    github: 'https://github.com/jeffvhuang/pt-files',
    description:
      'Simplified physiotherapy record management app to demonstrate .NET Core with clean architecture',
    highlights: [
      'TypeScript',
      'React',
      'Redux',
      '.NET Core',
      'SQL',
      'Docker',
      'Clean Architecture',
      'AWS'
    ]
  },
  {
    title: titles.task,
    link: 'https://jeffvh-task-manager.herokuapp.com',
    github: 'https://github.com/jeffvhuang/task-manager',
    description: 'Simple task checklist application. (Login: testuser@example.com & PW: Test123$)',
    highlights: ['React', 'Redux', 'Node.js', 'Express', 'NoSQL', 'Heroku']
  },
  {
    title: titles.chat,
    link: 'https://jeffvh-lets-chat.herokuapp.com/',
    github: 'https://github.com/jeffvhuang/lets-chat',
    description: 'Real time chat application',
    highlights: ['Node.js', 'Express', 'Socket.io', 'Heroku']
  },
  {
    title: titles.gameon,
    link: 'https://github.com/jeffvhuang/game-on',
    github: 'https://github.com/jeffvhuang/game-on',
    description: 'Client UI to view recent and upcoming sports tournaments and matches',
    highlights: ['TypeScript', 'React', 'Redux', 'Sass']
  },
  {
    title: titles.gameonapi,
    link: 'https://github.com/jeffvhuang/game-on-api',
    github: 'https://github.com/jeffvhuang/game-on-api',
    description: 'API to obtain data for select sports and e-sports',
    highlights: ['.NET Core', 'NoSQL', 'Three-Tier Architecture']
  }
];

module.exports = {
  details,
  projects,
  titles
};
