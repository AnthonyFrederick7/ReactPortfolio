import { Link } from 'react-router-dom';
import { homeData } from '../../data/homeData';
import './landing.css';

function Landing({ drawerOpen, classes }) {


    return (
        <div className='landing' id='home' style={{ backgroundImage: "linear-gradient(to right, #18503c 0%, #1d2e4e 100%)" }}>
            <div className='landing--container'>
                <img
                    src={homeData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: '#15DB95'
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundImage: "linear-gradient(to right, #18503c 0%, #1d2e4e 100%)" }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: '#EFF3F4' }}
                    >
                        <h1>{homeData.name}</h1>

                        <p>{homeData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {homeData.resume && (
                                <a
                                    href={homeData.resume}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className="resumeBtn">
                                        Download CV
                                    </button>
                                </a>
                            )}
                                <a href='#contact'>
                                    <button className="contactBtn">
                                        Contact
                                    </button>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
        </div>
                <div className="wave">
                <svg style={{display: "block"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill" ></path>
        <linearGradient id="my-cool-gradient" x2=".1" y2="0">
    <stop offset="0%" stopColor="#18503c" />
    <stop offset="100%" stopColor="#15DB95" />
  </linearGradient>
    </svg>
</div>
<div className="wave2">
                <svg style={{display: "block"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill" ></path>
        <linearGradient id="my-cool-gradient-2" x2=".4" y2="0">
    <stop offset="0%" stopColor="#18503c" />
    <stop offset="100%" stopColor="#1d2e4e" />
  </linearGradient>
    </svg>
</div>
        </div>
        
        
    );
}

export default Landing;