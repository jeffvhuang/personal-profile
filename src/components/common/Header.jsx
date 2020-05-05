import React from 'react';
import './header.css';

const title = "Jeffrey Huang";
const subtitle = "Software Developer";
const linkedin = 'https://www.linkedin.com/in/jeffvhuang/';
const github = 'https://github.com/jeffvhuang';
const email = 'jeffvh@outlook.com';

class Header extends React.Component {
    handleEmailClick = () => {
        console.log(email);
    }

    render() {
        return (
            <header>
                <div className="page-header">
                    <div className="page-header__headings">
                        <h1>{title}</h1>
                        <h3>{subtitle}</h3>
                    </div>
                    <div className="page-header__logos">
                        <a href={linkedin} target="_blank">
                            <img id="linkedin-logo" className="logo" src="../../public/images/LI-Logo.png" alt="LinkedIn Logo" />
                        </a>
                        <a href={github} target="_blank">
                            <img id="github-mark" className="logo" src="../../public/images/GitHub-Mark-64px.png" alt="GitHub Mark" />
                            <img id="github-logo" className="logo" src="../../public/images/GitHub_Logo.png" alt="GitHub Logo" />
                        </a>
                        <button className="email" onClick={this.handleEmailClick}>{email}</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;