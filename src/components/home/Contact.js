import React, { Component } from 'react';
import autosize from 'autosize';
import axios from 'axios';
import ErrorMessage from '../shared/ErrorMessage';
import SuccessMessage from '../shared/SuccessMessage';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      first: '',
      last: '',
      email: '',
      message: '',
      success: '',
      error: '',
    };
  }

  componentDidMount() {
    autosize(document.querySelectorAll('textarea'));
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.first) {
      this.setState({
        error: 'First name must be populated.',
      });
    } else if (!this.state.last) {
      this.setState({
        error: 'Last name must be populated.',
      });
    } else if (!this.state.email) {
      this.setState({
        error: 'email must be populated.',
      });
    } else if (!this.state.message) {
      this.setState({
        error: 'Message must be populated.',
      });
    } else {
      axios.post('/api/contact', {
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        message: this.state.message,
      })
      .then(resp => {
        if (resp.data.success) {
          this.setState({
            first: '',
            last: '',
            email: '',
            message: '',
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
      });
    }
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit}>
          <h4>Contact us</h4>
          <ErrorMessage error={ this.state.error } />
          <SuccessMessage message={this.state.success} />
          <div className="row">
            <div className="col-6">
              <input onChange={this.handleChange} name="first" value={this.state.first} className="form-control" placeholder="First" />
            </div>
            <div className="col-6">
              <input onChange={this.handleChange} name="last" value={this.state.last} className="form-control" placeholder="Last" />
            </div>
          </div>
          <input onChange={this.handleChange} name="email" value={this.state.email} className="form-control" placeholder="Email" />
          <textarea onChange={this.handleChange} name="message" value={this.state.message} className="form-control" placeholder="What are you looking for..." />
          <input className="btn" type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default Contact;
