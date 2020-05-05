import React from 'react';
import Header from './common/Header';
import Card from './common/Card';
import './app.css'
import { ToastContainer, toast } from 'react-toastify';
import ProfileService from '../services/profileService';

class App extends React.Component {
    state = {
        projects: []
    }

    async componentDidMount() {
        try {
            const projects = await ProfileService.getProjects()
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