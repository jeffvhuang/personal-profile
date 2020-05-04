import React from 'react';
import './header.css';

const title = "Jeffrey Huang";
const linkedin = 'https://www.linkedin.com/in/jeffvhuang/';
const github = 'https://github.com/jeffvhuang';
const email = 'jeffvh@outlook.com';

class Header extends React.Component {
    render() {
        return (
            <header className="page-header">
                <div>
                    <h1>{title}</h1>
                </div>
                <div className="logos">
                    <a href={linkedin} target="_blank">
                        <img id="linkedin-logo" className="logo" src="../../public/images/LI-In-Bug.png" alt="LinkedIn Logo" />
                    </a>
                    <a href={github} target="_blank">
                        <img className="logo" src="../../public/images/GitHub-Mark-64px.png" alt="LinkedIn Logo" />
                    </a>
                </div>
            </header>
        )
    }
}

export default Header;