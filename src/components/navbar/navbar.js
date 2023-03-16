import React from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import './navbar.css';

function NavbarUI({ classes, handleDrawerOpen, handleDrawerClose, open }) {

    return (
        <div className='navbar'>
            <div className='navbar--container'>
            <div className="navContainer">
                <div className="iconContainer">
                <div className="threeD">
                <div className="apf">
        <svg className="svg">
            <clipPath id="a" clipPathUnits="objectBoundingBox"><path d="M0,1 Q0,0,0,0 Q1,0,1,0 Q1,1,1,1 C0.7,1,0.7,1,0.7,1 C0.7,0.667,0.7,0.667,0.7,0.667 L0.7,0.25 L0.3,0.25 L0.3,0.417 L0.7,0.417 L0.7,0.667 L0.3,0.667 L0.3,1 L0,1"></path></clipPath>
        </svg>
        <div className="letter a">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="letter p">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="letter f">
            <div></div>
            <div></div>
            <div></div>
    </div>
    </div>
    </div>
            <div className='navSocialLink'>
                <a href="https://github.com/AnthonyFrederick7" target="_blank">
                    <FaGithub />
                </a>
                </div>
                <div className='navSocialLink'>
                <a href="https://www.linkedin.com/in/anthony-frederick-9567b0266/" target="_blank">
                    <FaLinkedin />
                </a>
                </div>
                <div className='navSocialLink'>
                <a href="https://stackoverflow.com/users/21329293/anthony-frederick"  target="_blank">
                    <FaStackOverflow />
                </a>
                </div>
                </div>
                
                <div className='navh3'>
                    <a href="#home">Home</a>
                </div>
                <div id="projects" className='navh3'>
                    <a href="#projectPage">Projects</a>
                </div>
                <div className='navh3'>
                    <a href="#skills">Skills</a>
                </div>                
                <div className='navh3'>
                    <a href="#contact">Contact</a>
                </div>

                <div className="iconContainer">
                <div className='navSocialLink'>
                <a href="https://www.facebook.com/anthony.frederick.165/"  target="_blank">
                    <FaFacebook />
                </a>
                </div>
                <div className='navSocialLink'>
                <a href="https://www.instagram.com/anthony.f7"  target="_blank">
                    <FaInstagram />
                </a>
                </div>
                <div className='navSocialLink'>
                <a href="https://twitter.com/SIooty"  target="_blank">
                    <FaTwitter />
                </a>
                </div>
                </div>

                <div className="nav-menu">
                <IoMenuSharp
                    className='navMenu'
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                />
                </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarUI;