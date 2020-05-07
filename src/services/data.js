const details = {
    title: "Jeffrey Huang",
    subtitle: "Software Developer",
    linkedin: 'https://www.linkedin.com/in/jeffvhuang/',
    github: 'https://github.com/jeffvhuang',
    email: 'jeffvh@outlook.com'
}

const projects = [
    {
        title: 'Lets Chat',
        imagePath: '../public/images/chat-bubbles.jpg',
        link: 'https://jeffvh-lets-chat.herokuapp.com/',
        github: 'https://github.com/jeffvhuang/lets-chat',
        description: 'Real time chat application',
        highlights: ['Node.js', 'Express', 'Socket.io']
    },
    {
        title: 'Task Manager',
        imagePath: '../public/images/project-management.jpg',
        link: 'https://jeffvh-task-manager.herokuapp.com',
        github: 'https://github.com/jeffvhuang/task-manager',
        description: 'API for task management',
        highlights: ['Node.js', 'Express', 'MongoDB']
    },
    {
        title: 'Recaura',
        imagePath: '../public/images/digital-hand.jpg',
        link: '',
        github: 'https://github.com/jeffvhuang/Recaura',
        description: 'Physiotherapy management software',
        highlights: ['React', 'Redux', '.NET Core', 'SQL', 'Docker']
    }
]

module.exports = {
    details,
    projects
}