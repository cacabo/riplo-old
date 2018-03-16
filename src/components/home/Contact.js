import React, { Component } from 'react';
import autosize from 'autosize';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    autosize(document.querySelectorAll('textarea'));
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("SUBMIT");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Contact us</h4>
        <div className="row">
          <div className="col-6">
            <input className="form-control" placeholder="First" />
          </div>
          <div className="col-6">
            <input className="form-control" placeholder="Last" />
          </div>
        </div>
        <input className="form-control" placeholder="Subject" />
        <textarea className="form-control" placeholder="What are you looking for..." />
        <input className="btn" type="submit" value="Send" />
      </form>
    );
  }
}

export default Home;
