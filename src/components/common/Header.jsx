import React from 'react';
import './header.css';
import { FaEnvelope } from 'react-icons/fa';
import ReactTooltip from "react-tooltip";
import { toast } from 'react-toastify';
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"
import ProfileService from '../../services/profileService';
import LinkedInIcon from '../../../public/images/LI-In-Bug.png';
import GitHubIcon from '../../../public/images/GitHub-Mark-64px.png';

class Header extends React.Component {
    state = {
        title: "",
        subtitle: "",
        linkedin: "",
        github: "",
        email: ""
    }

    async componentDidMount() {
        try {
            const details = await ProfileService.getPersonalDetails();
            this.setState({ ...details })
        } catch (e) {
            toast.error('Unable to get data', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true
            })
        }
    }

    handleEmailClick = () => {
        if (!document.queryCommandSupported('copy')) {
            return alert('Unable to copy')
        }

        // Create and append element to unseen part of page to copy and then remove again
        var el = document.createElement('textarea');
        el.value = this.state.email;
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
        const { title, subtitle, linkedin, github, email } = this.state;

        return (
            <header>
                <div className="page-header">
                    <div className="page-header__headings">
                        <h1>{title}</h1>
                        <h3>{subtitle}</h3>
                    </div>
                    <div className="page-header__logos">
                        <a href={linkedin} target="_blank" data-tip="LinkedIn profile">
                            <img id="linkedin-logo" className="logo" src={LinkedInIcon} alt="LinkedIn Logo" />
                        </a>
                        <a href={github} target="_blank" data-tip="GitHub profile">
                            <img id="github-mark" className="logo" src={GitHubIcon} alt="GitHub Mark" />
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