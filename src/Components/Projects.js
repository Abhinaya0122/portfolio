import React from 'react';
import '../css/projects.css';
import hackbuzz from '../Sources/hackbuzz.jpeg'; // Adjust this path based on your folder structure
import thinkathon from '../Sources/thinkathon.jpeg'; // Adjust this path based on your folder structure
import plant from '../Sources/hackbuzz.jpeg'; // Add more images as needed

function Projects() {
    const ProjectData = [
        {
            title: 'Smart Attendance System',
            Skills: 'HTML, CSS, JS, Flask',
            github: 'https://github.com/example',
            url: 'https://liveproject.com',
            thumbnail: hackbuzz,
        },
        {
            title: 'Plant Disease Prediction',
            Skills: 'React, TensorFlow, FastAPI',
            github: 'https://github.com/example',
            url: 'https://liveproject.com',
            thumbnail: plant,
        },
        {
            title: 'GPS Tracker',
            Skills: 'Flutter, Node.js',
            github: 'https://github.com/example',
            url: 'https://liveproject.com',
            thumbnail: thinkathon,
        },
    ];

    return (
        <div className='main-project'>
            <div className='projects'>
                <h3 id='projects'>My Work</h3>
                <div className='project-grid'>
                    {ProjectData.map((item, index) => (
                        <div
                            className='project-card'
                            key={index}
                            style={{
                                backgroundImage: `url(${item.thumbnail})`, // Properly format backgroundImage
                                border: '1px solid red',
                                backgroundSize: ``
                            }}
                        >
                            <div className='project-hover'>
                                <a href={item.url} target='_blank' rel='noopener noreferrer'>
                                    <i className='fas fa-external-link-alt'></i>
                                </a>
                                <a href={item.github} target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-github'></i>
                                </a>
                            </div>
                            <h3 className='project-title'>{item.title}</h3>
                            <p className='project-skills'>{item.Skills}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
