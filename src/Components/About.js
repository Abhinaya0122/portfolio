// import React from 'react'
// import '../css/about.css'
// function About() {
//   return (
//     <>
//     <div className='page-container'>
//        <div className='about-me-container animate__animated animate__fadeInLeft'>
//         <h5 id='about'>About me</h5>
//         <p className='about-content'>Hello there ! I'm <b>Abhinaya Shrinivasan</b>, a passionate software developer. Currently navigating through my pre-final year. My journey have begun with solving the needs of the society with my craetive and innovative ideas. I have a deep love for FullStack Development and Salesforce Development. I constantly strive to push boundaries of whats possible.</p>
//         <div>
//                 <img src={require("../../src/Sources/Abhinaya.jpg")} alt="Profile" className = "about-profile"></img>
//             </div>
//        </div>
//        <div className='who-container'>
//         <h5>Who Am I? </h5>
//         <p className='who-content'>I'm a winner of prestigious KEC Hackathon, Thinkathon'24, Hackbuzz'24, and an enthusiast who thrives on exploring various technologies. From FullStack Development to Salesforce Development and even diving into the Internet of things (IoT), I've embraced the ever-evolving techworld. </p>
//        </div>
//     </div>
//     </>
//   )
// }

// export default About
// import React, { useEffect, useRef } from 'react';
// import '../css/about.css';

// function About() {
//   const aboutMeRef = useRef(null);
//   const whoRef = useRef(null);
//   const kecPicRefs = useRef([]);

//   kecPicRefs.current = [];

//   const addToRefs = (el) => {
//     if (el && !kecPicRefs.current.includes(el)) {
//       kecPicRefs.current.push(el);
//     }
//   };

//   useEffect(() => {
//     const options = {
//       threshold: 0.1
//     };

//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate__fadeInLeft');
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersection, options);

//     const aboutMeElement = aboutMeRef.current;
//     const whoElement = whoRef.current;

//     if (aboutMeElement) observer.observe(aboutMeElement);
//     if (whoElement) observer.observe(whoElement);
//     kecPicRefs.current.forEach((ref) => observer.observe(ref));

//     return () => {
//       if (aboutMeElement) observer.unobserve(aboutMeElement);
//       if (whoElement) observer.unobserve(whoElement);
//       kecPicRefs.current.forEach((ref) => observer.unobserve(ref));
//     };
//   }, []);

//   return (
//     <>
//       <div className='page-container'>
//         <div className='about-me-container' ref={aboutMeRef}>
//           <h5 id='about'>About me</h5>
//           <p className='about-content'>
//             Hello there! I'm <b>Abhinaya Shrinivasan</b>, a passionate software developer. Currently navigating through my pre-final year. My journey has begun with solving the needs of society with my creative and innovative ideas. I have a deep love for FullStack Development and Salesforce Development. I constantly strive to push the boundaries of what's possible.
//           </p>
//         </div>
//         <div className='who-container' ref={whoRef}>
//           <h5>Who Am I?</h5>
//           <p className='who-content'>
//             I'm a winner of prestigious KEC Hackathon, Thinkathon'24, Hackbuzz'24, and an enthusiast who thrives on exploring various technologies. From FullStack Development to Salesforce Development and even diving into the Internet of things (IoT), I've embraced the ever-evolving tech world.
//           </p>
//         </div>
//       </div>
//       <div className='know-about'>
//         <div className='awards'>
//           <div className='kec-hack' ref={addToRefs}>
//             <div className='kec-hack-pic'>
//               <img src={require("../../src/Sources/thinkathon.jpeg")} alt="KEC Hack" />
//             </div>
//             <h3>At Kongu Engineering College</h3>
//             <h2>Winner of Thinkathon'24</h2>
//             <p>
//              Happy to share that our team has won the inter-department hackathon for the problem statement Scalable Data Storage and retrieval
//             </p>
//           </div>
//           <div className='kec-hack' ref={addToRefs}>
//             <div className='kec-hack-pic'>
//               <img src={require("../../src/Sources/hackbuzz.jpeg")} alt="KEC Hack" />
//             </div>
//            <h3>At Kongu Engineering College</h3>
//            <h2>Winner of Hackbuzz'24</h2>
//            <p>I am happy to share that our girls team has won Hackbuzz'24 for the problem statement NextEdu-A pathway for better and futuristic Education</p>
//           </div>
//           <div className='kec-hack' ref={addToRefs}>
//             <div className='kec-hack-pic' >
//               <img src={require("../../src/Sources/kec_hack.jpeg")} alt="KEC Hack" />
//             </div>
//             <h3>At Kongu Engineering College</h3>
//             <h2>Winner of KEC Hackathon'24</h2>
//             <p>
//               I am honoured to share that our team has won the prestigious KEC hackathon which was conducted by IEF and KEC Coding forum for the problem statement Student Activity point Calculator.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default About;


import React, { useEffect, useRef } from 'react';
import '../css/about.css';

function About() {
  const aboutMeRef = useRef(null);
  const whoRef = useRef(null);
  const kecHackRefs = useRef([]);

  kecHackRefs.current = [];

  const addToRefs = (el) => {
    if (el && !kecHackRefs.current.includes(el)) {
      kecHackRefs.current.push(el);
    }
  };

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeInLeft');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const aboutMeElement = aboutMeRef.current;
    const whoElement = whoRef.current;

    if (aboutMeElement) observer.observe(aboutMeElement);
    if (whoElement) observer.observe(whoElement);
    kecHackRefs.current.forEach((ref) => observer.observe(ref));

    return () => {
      if (aboutMeElement) observer.unobserve(aboutMeElement);
      if (whoElement) observer.unobserve(whoElement);
      kecHackRefs.current.forEach((ref) => observer.unobserve(ref));
    };
  }, []);

  return (
    <>
    <div className='about'>
      <div className='page-container'>
        <div className='about-me-container' ref={aboutMeRef}>
          <h5 id='about'>About me</h5>
          <p className='about-content'>
            Hello there! I'm <b>Abhinaya Shrinivasan</b>, a passionate software developer. Currently navigating through my pre-final year. My journey has begun with solving the needs of society with my creative and innovative ideas. I have a deep love for FullStack Development and Salesforce Development. I constantly strive to push the boundaries of what's possible.
          </p>
        </div>
        <div className='who-container' ref={whoRef}>
          <h5>Who Am I?</h5>
          <p className='who-content'>
            I'm a winner of prestigious KEC Hackathon, Thinkathon'24, Hackbuzz'24, and an enthusiast who thrives on exploring various technologies. From FullStack Development to Salesforce Development and even diving into the Internet of things (IoT), I've embraced the ever-evolving tech world.
          </p>
        </div>
      </div>
      <div className='know-about'>
        <h4>KNOW ABOUT</h4>
        <div className='awards'>
          <div className='kec-hack' ref={addToRefs}>
            <div className='kec-hack-pic'>
              <img src={require("../../src/Sources/thinkathon.jpeg")} alt="KEC Hack" />
            </div>
            <h3>At Kongu Engineering College</h3>
            <h2>Winner of Thinkathon'24</h2>
            <p>
             Happy to share that our team has won the inter-department hackathon for the problem statement Scalable Data Storage and retrieval
            </p>
          </div>
          <div className='kec-hack' ref={addToRefs}>
            <div className='kec-hack-pic'>
              <img src={require("../../src/Sources/hackbuzz.jpeg")} alt="KEC Hack" />
            </div>
           <h3>At Kongu Engineering College</h3>
           <h2>Winner of Hackbuzz'24</h2>
           <p>I am happy to share that our girls team has won Hackbuzz'24 for the problem statement NextEdu-A pathway for better and futuristic Education</p>
          </div>
          <div className='kec-hack' ref={addToRefs}>
            <div className='kec-hack-pic'>
              <img src={require("../../src/Sources/kec_hack.jpeg")} alt="KEC Hack" />
            </div>
            <h3>At Kongu Engineering College</h3>
            <h2>Winner of KEC Hackathon'24</h2>
            <p>
              I am honoured to share that our team has won the prestigious KEC hackathon which was conducted by IEF and KEC Coding forum for the problem statement Student Activity point Calculator.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default About;
