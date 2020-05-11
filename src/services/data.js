const details = {
    title: "Jeffrey Huang",
    subtitle: "Software Developer",
    linkedin: 'https://www.linkedin.com/in/jeffvhuang/',
    github: 'https://github.com/jeffvhuang',
    email: 'jeffvh@outlook.com'
}

const projects = [
    {
        title: 'Task Manager',
        imagePath: '../../public/images/project-management.jpg',
        link: 'https://jeffvh-task-manager.herokuapp.com',
        github: 'https://github.com/jeffvhuang/task-manager',
        description: 'API for task management',
        highlights: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB']
    },
    {
        title: 'PT Files',
        imagePath: '../../public/images/digital-hand.jpg',
        link: 'http://ptfiles-env.eba-rm3yrkqs.ap-southeast-2.elasticbeanstalk.com',
        github: 'https://github.com/jeffvhuang/pt-files',
        description: 'Physiotherapy management software',
        highlights: ['TypeScript', 'React', 'Redux', '.NET Core', 'SQL', 'AWS']
    },
    {
        title: 'Lets Chat',
        imagePath: '../../public/images/chat-bubbles.jpg',
        link: 'https://jeffvh-lets-chat.herokuapp.com/',
        github: 'https://github.com/jeffvhuang/lets-chat',
        description: 'Real time chat application',
        highlights: ['Node.js', 'Express', 'Socket.io']
    }
]

module.exports = {
    details,
    projects
}