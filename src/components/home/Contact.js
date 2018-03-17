import React, { Component } from 'react';
import autosize from 'autosize';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      first: '',
      last: '',
      subject: '',
      body: '',
      success: '',
      error: '',
    };
  }

  componentDidMount() {
    autosize(document.querySelectorAll('textarea'));
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/contact', {
      first: this.state.first,
      last: this.state.last,
      subject: this.state.subject,
      body: this.state.body
    })
    .then(resp => {
      if (resp.data.success) {
        this.setState({
          first: '',
          last: '',
          subject: '',
          body: '',
          success: 'Message sent!',
          error: '',
        });
      } else {
        this.setState({
          error: resp.data.error,
          success: '',
        })
      }
    })
    .catch(err => {
      this.setState({
        error: 'Hmmm there was an error sending your message, reach us at hello@riplo.io',
        success: '',
      });
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Contact us</h4>
        <div className="row">
          <div className="col-6">
            <input onChange={this.handleChange} name="first" className="form-control" placeholder="First" />
          </div>
          <div className="col-6">
            <input onChange={this.handleChange} name="last" className="form-control" placeholder="Last" />
          </div>
        </div>
        <input onChange={this.handleChange} name="subject" className="form-control" placeholder="Subject" />
        <textarea onChange={this.handleChange} name="body" className="form-control" placeholder="What are you looking for..." />
        <input className="btn" type="submit" value="Send" />
      </form>
    );
  }
}

export default Contact;
