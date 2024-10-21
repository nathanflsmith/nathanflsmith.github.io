import React from 'react';

const Project = (props: { title: string, href: string, img: string, imgAlt: string}) => {
  return (
    <div className="grid-item project-item">
      <div className="project-title">
        <h2>{props.title}</h2>
      </div>
      <div className="project-img">
        <a href={props.href} target="_blank" rel="noreferrer"><img src={props.img} alt={props.imgAlt} /></a>
      </div>
    </div>
  );
};

export default Project;
