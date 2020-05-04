import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Card from './components/Card';

const projects = [
    {
        title: 'Lets Chat',
        imagePath: '',
        link: 'https://jeffvh-lets-chat.herokuapp.com/',
        github: 'https://github.com/jeffvhuang/lets-chat',
        description: 'A real time chat application',
        highlights: ['Node.js', 'Express.js', 'Socket.io']
    },
    {
        title: 'Task Manager API',
        imagePath: '',
        link: 'https://jeffvh-task-manager.herokuapp.com',
        github: 'https://github.com/jeffvhuang/task-manager',
        description: 'An API for task management',
        highlights: ['Node.js', 'Express.js', 'MongoDB']
    },
    {
        title: 'Recaura',
        imagePath: '',
        link: '',
        github: 'https://github.com/jeffvhuang/Recaura',
        description: 'Physiotherapy management software',
        highlights: ['React', 'Redux', '.NET Core', 'SQL', 'Docker']
    }
]

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="card-list">
                    {projects.map((project) => <Card {...project} />)}
                </div>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))