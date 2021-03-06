import React from 'react';
import Card from '../Card';
import projects from '../../utils/projects.js';
import './style.css';
import Pdf from '../../documents/EthanResume.PDF';

function createCard(project) {
  return (
    <Card
      key={project.id}
      id={project.id}
      title={project.title}
      href={project.href}
      github={project.github}
      img={project.img}
      alt={project.alt}
      class={project.class}
      video={project.video}
      description={project.description}
      technologies={project.technologies}
    />
  );
}

function Portfolio() {
  return (
    <div className='container' id='portfolio-box'>
      <h3 className='portfolio-title'>Featured Projects:</h3>

      <div className='row'>{projects.map(createCard)}</div>

      <a className='pdf-link' href={Pdf} target='_blank' rel='noreferrer'>
        <h3 className='resume-text'>My Resume</h3>
      </a>
    </div>
  );
}

export default Portfolio;
