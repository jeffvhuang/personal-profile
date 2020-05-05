import React from 'react';
import './header.css';
import { FaEnvelope } from 'react-icons/fa';
import ReactTooltip from "react-tooltip";

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
                        <a href={linkedin} target="_blank" data-tip="LinkedIn">
                            <img id="linkedin-logo" className="logo" src="../../public/images/LI-In-Bug.png" alt="LinkedIn Logo" />
                        </a>
                        <a href={github} target="_blank" data-tip="GitHub">
                            <img id="github-mark" className="logo" src="../../public/images/GitHub-Mark-64px.png" alt="GitHub Mark" />
                        </a>
                        <div
                            className="email logo"
                            onClick={this.handleEmailClick}
                            data-tip={`Copy '${email}' to clipboard`}
                        >
                            <FaEnvelope size="35rem" />
                        </div>
                        <ReactTooltip place="top" type="dark" effect="float"/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;