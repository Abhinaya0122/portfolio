import React from 'react';
import '../css/projects.css';
import hackbuzz from '../Sources/hackbuzz.jpeg';
import thinkathon from '../Sources/thinkathon.jpeg';
import plant from '../Sources/hackbuzz.jpeg';

function Projects() {
    const ProjectData = [
        {
            title: 'Smart Attendance System',
            Skills: 'HTML, CSS, JS, Flask',
            github: 'https://github.com/example',
            url: 'https://liveproject.com',
            thumbnail: hackbuzz,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Plant Disease Prediction',
            Skills: 'React, TensorFlow, FastAPI',
            github: 'https://github.com/example',
            url: 'https://liveproject.com',
            thumbnail: plant,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'GPS Tracker',
            Skills: 'Flutter, Node.js',
            github: 'https://github.com/example',
            url: 'https://liveproject.com',
            thumbnail: thinkathon,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ];

    return (
        <div className='project-container'>
            <h3 id='projects'>My Work</h3>
            <div className='projects'>
                {ProjectData.map((item, index) => (
                    <div className='project-card' key={index}>
                        <div
                            className='thumbnail'
                            style={{
                                backgroundImage: `url(${item.thumbnail})`
                            }}
                        ></div>
                        <div className='left-container'>
                            <h4 className='project-title'>{item.title}</h4>
                            <p className='project-description'>{item.description}</p>
                            <div className='project-links'>
                                <a href={item.url} target='_blank' rel='noopener noreferrer'>
                                    <i className='fas fa-external-link-alt'></i> Live Project
                                </a>
                                <a href={item.github} target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-github'></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
