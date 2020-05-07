import React from 'react';
import Header from './common/Header';
import Card from './common/Card';
import './app.css'
import { ToastContainer, toast } from 'react-toastify';
import ProfileService from '../services/profileService';
import letsChatImg from '../../public/images/chat-bubbles.jpg';
import taskManagerImg from '../../public/images/project-management.jpg';
import recauraImg from '../../public/images/digital-hand.jpg';

class App extends React.Component {
    state = {
        projects: []
    }

    async componentDidMount() {
        try {
            const projects = await ProfileService.getProjects()
            projects.forEach(project => {
                let img = (project.title === "Lets Chat") ? letsChatImg
                    : (project.title === "Task Manager") ? taskManagerImg
                    : recauraImg;

                project.imagePath = img;
            })
            this.setState({ projects })
        } catch (e) {
            toast.error('Unable to get project data', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true
            })
        }
    }

    render() {
        return (
            <>
                <Header />
                <div className="main">
                    <div className="card-list">
                        {this.state.projects.map((project, i) => <Card key={i} {...project} />)}
                    </div>
                </div>
                <ToastContainer />
            </>
        )
    }
}

export default App;