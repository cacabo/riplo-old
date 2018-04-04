import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Browser from './Browser';

class Project extends Component {
  render() {
    return (
      <div className="container project">
        <div className="row">
          <div className="col-12 col-md-6">
            <Browser image={"" + this.props.project.image} alt={this.props.project.title} />
          </div>
          <div className="col-12 col-md-6">
            <div className="space-1" />
            <div className="space-4 hidden-md-down" />
            <a href={this.props.project.link}>
              <h2 className="bold">{this.props.project.title}</h2>
            </a>
            <p>{this.props.project.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
