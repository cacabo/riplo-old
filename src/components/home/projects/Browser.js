import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Browser extends Component {
  render() {
    if (!this.props.image) return null;
    const Image = require(`../../../img/examples/${this.props.image}`);
    return (
      <div className="browser">
        <div className="browser-top">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
        <img src={Image} alt={this.props.alt} className="img-fluid" />
      </div>
    );
  }
}

Browser.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default Browser;
