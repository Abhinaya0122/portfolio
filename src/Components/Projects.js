import React from 'react'

function Projects() {
    const ProjectData =[
        {
            title : 'Smart Attendance System',
            Skills : 'HTML,CSS,JS,Flask',
            github : '',
            url : '',
            thumbnail : ''
        },
        {
            title : 'Smart Attendance System',
            Skills : 'HTML,CSS,JS,Flask',
            github : '',
            url : '',
            thumbnail : ''
        },
        {
            title : 'Smart Attendance System',
            Skills : 'HTML,CSS,JS,Flask',
            github : '',
            url : '',
            thumbnail : ''
        },
        {
            title : 'Smart Attendance System',
            Skills : 'HTML,CSS,JS,Flask',
            description:'',
            github : '',
            url : '',
            thumbnail : ''
        }
    ];
  return (
   <div className='projects'>
    <h3 id='projects'>My Work</h3>
    {ProjectData.map((item, index)=>(
        <div className='project-item' key={index}>
            <div className='project-content'>
                <div className='project-thumbnail'></div>
                <h3 className='project-tile'>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.url}><h3>View</h3></a>
            </div>
        </div>
    ))

    }
   </div>
  );
};

export default Projects;