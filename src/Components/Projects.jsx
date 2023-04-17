import React from 'react';
import Project from './Project.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = {
    one: {
      name: 'Playtimes',
      desc: 'playtimes is a website that has updated news on games & thier specs and where to purchase them around you ',
      liveLink: 'https://playtimes.netlify.app',
      githubLink: 'https://github.com/jallalludeen/playtimes.git',
      techs: ['HTML', 'CSS', 'JAVASCRIPT'],
      isOpenSource: true
    },
    two: {
      name: 'Demo portfolio',
      desc: 'This is  my First portfolio',
      liveLink: 'https://jaysdemoportfolio.netlify.app',
      githubLink: 'https://github.com/jallalludeen/demo-portfolio01.git',
      techs: ['HTML5', 'CSS3', 'JAVASCRIPT',],
      isOpenSource: true
    }
  }
  return (
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
        <Project info={projectsInfo.one} />
        <Project info={projectsInfo.two} />
      </div>
    </div>
  )
}

export default Projects;
