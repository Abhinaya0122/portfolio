import React, { useEffect, useRef } from 'react';
import '../css/education.css';

const Timeline = () => {
  const timelineRef = useRef([]);

  const timelineData = [
    {
      title: 'Bachelor of Engineering in Computer Science',
      date: '2022 - Present',
      institution: 'Kongu Engineering College',
      achievements: 'Major Achievements: Won three hackathons, participated in HackBuzz.'
    },
    {
      title: 'High Secondary Certificate',
      date: '2020 - 2022',
      institution: 'Global Matriculation Higher Secondary School',
      achievements: 'Major Achievements: Top 7th in India in ISRO CyberSpace Competition'
    },
    {
      title: 'Secondary School Leaving Certificate',
      date: '2019 - 2020',
      institution: 'Global Matriculation Higher Secondary School',
      achievements: 'Major Achievements: Top 5% of the class, Student POCSO coordinator'
    },
  ];

  useEffect(() => {
    const options = {
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeInRight');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const elements = timelineRef.current;

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="timeline">
      <h3 className='timeline-heading' id='skills'>Education</h3>
      {timelineData.map((item, index) => (
        <div 
          className="timeline-item" 
          key={index}
          ref={el => timelineRef.current[index] = el}
        >
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <div className='timeline-logo'>
              <img src={require("../../src/Sources/github.png")} alt="KEC Hack" />
            </div>
            <h3 className="timeline-title">{item.title}</h3>
            <span className="timeline-date">{item.date}</span>
            <p>{item.institution}</p>
            <p>{item.achievements}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
