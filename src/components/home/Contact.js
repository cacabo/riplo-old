import React, { Component } from 'react';
import autosize from 'autosize';
import axios from 'axios';
import ErrorMessage from '../shared/ErrorMessage';
import SuccessMessage from '../shared/SuccessMessage';
import Fade from 'react-reveal/Fade';

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
      pending: false,
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
    // Prevent the default action
    event.preventDefault();

    // Denote that the submittal is pending
    this.setState({ pending: true });

    // Perform error checking
    if (!this.state.first) {
      this.setState({
        error: 'First name must be populated.',
        pending: false,
      });
    } else if (!this.state.last) {
      this.setState({
        error: 'Last name must be populated.',
        pending: false,
      });
    } else if (!this.state.email) {
      this.setState({
        error: 'email must be populated.',
        pending: false,
      });
    } else if (!this.state.message) {
      this.setState({
        error: 'Message must be populated.',
        pending: false,
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
            pending: false,
          });
        } else {
          this.setState({
            error: resp.data.error,
            success: '',
            pending: false,
          });
        }
      })
      .catch(err => {
        this.setState({
          error: 'Hmmm there was an error sending your message, reach us at hello@riplo.io',
          success: '',
          pending: false,
        });
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="space-2" />
        <div className="space-2 hidden-md-down" />
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6" id="contact">
            <Fade>
              <div className="card">
                <form onSubmit={this.handleSubmit}>
                  <h2 className="bold">Contact us</h2>
                  <div className="squiggle-1" />
                  <div className="squiggle-2" />
                  <br/>
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
                  <input
                    className={
                      (this.state.pending || (
                        !this.state.first || !this.state.last || !this.state.email || !this.state.message
                      )) ? "btn disabled" : "btn"
                    }
                    type="submit"
                    value={this.state.pending ? "Sending..." : "Send"}
                  />
                </form>
              </div>
            </Fade>
          </div>
        </div>
        <div className="space-4" />
        <div className="space-2 hidden-md-down" />
      </div>
    );
  }
}

export default Contact;
