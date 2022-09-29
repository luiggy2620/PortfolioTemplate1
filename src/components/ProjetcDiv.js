import React from 'react';
import { ProjectDiv, ButtonAnimate } from './../elements/portfolio'

const Project = ({number, nameProject, description, urlImage, direction}) => {
    return ( 
        <ProjectDiv direction={direction} urlImage={urlImage}>
            <h1>{number}</h1>
            <div>
              <h2>{nameProject}</h2>
              <p>{description}.</p>
              <ButtonAnimate>More</ButtonAnimate>
            </div>
        </ProjectDiv>
     );
}
 
export default Project;