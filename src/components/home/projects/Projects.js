import React, {Component} from 'react';
import Project from './Project';
import projects from '../../../json/projects.json';

class Projects extends Component {
  render() {
    return projects.map(project => (<Project project={project} key={project.title} />));
  }
}

export default Projects;
