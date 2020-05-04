import React from 'react';
import './header.css';

class Header extends React.Component {
    state = {
        title: "Jeffrey Huang",
        linkedin: 'https://www.linkedin.com/in/jeffvhuang/',
        github: 'https://github.com/jeffvhuang'
    }

    render() {
        const { title, linkedin, github } = this.state;

        return (
            <header className="page-header">
                <div>
                    <h1>{title}</h1>
                </div>
                <div className="logos">
                    <a href={linkedin}>
                        <img id="linkedin-logo" className="logo" src="../../public/images/LI-In-Bug.png" alt="LinkedIn Logo" target="_blank" />
                    </a>
                    <a href={github}>
                        <img className="logo" src="../../public/images/GitHub-Mark-64px.png" alt="LinkedIn Logo" target="_blank" />
                    </a>
                </div>
            </header>
        )
    }
}

export default Header;