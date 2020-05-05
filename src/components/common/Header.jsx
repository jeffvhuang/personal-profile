import React from 'react';
import './header.css';
import { FaEnvelope } from 'react-icons/fa';
import ReactTooltip from "react-tooltip";
import { toast } from 'react-toastify';
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"

const title = "Jeffrey Huang";
const subtitle = "Software Developer";
const linkedin = 'https://www.linkedin.com/in/jeffvhuang/';
const github = 'https://github.com/jeffvhuang';
const email = 'jeffvh@outlook.com';

class Header extends React.Component {
    handleEmailClick = () => {
        if (!document.queryCommandSupported('copy')) {
            return alert('Unable to copy')
        }

        // Create and append element to unseen part of page to copy and then remove again
        var el = document.createElement('textarea');
        el.value = email;
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        toast.info('Copied email to clipboard', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true
        });
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
                        <ReactTooltip place="top" type="info" effect="float"/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;