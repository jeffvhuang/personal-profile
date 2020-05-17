import React from 'react';
import Header from './common/Header';
import Card from './common/Card';
import './app.css';
import { ToastContainer, toast } from 'react-toastify';
import ProfileService from '../services/profileService';
import { titles } from './helpers/data';
import letsChatImg from '../../public/images/speech-bubbles.jpg';
import taskManagerImg from '../../public/images/project-mgmt.jpg';
import recauraImg from '../../public/images/digital-hand.jpg';
import ptfilesImg from '../../public/images/medical-tech.jpg';

class App extends React.Component {
  state = {
    projects: []
  };

  async componentDidMount() {
    try {
      const projects = await ProfileService.getProjects();
      projects.forEach((project) => {
        project.imagePath = this.getProjectImage(project.title);
      });
      this.setState({ projects });
    } catch (e) {
      toast.error('Unable to get project data', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true
      });
    }
  }

  getProjectImage(title) {
    switch (title) {
      case titles.recaura:
        return recauraImg;
      case titles.task:
        return taskManagerImg;
      case titles.chat:
        return letsChatImg;
      case titles.ptfiles:
        return ptfilesImg;
      default:
        return '';
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="main">
          <div className="card-list">
            {this.state.projects.map((project, i) => (
              <Card key={i} {...project} />
            ))}
          </div>
        </div>
        <ToastContainer />
      </>
    );
  }
}

export default App;
