import React, { Component } from "react";

class LoginSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    alert(`Email: ${this.state.email}\nPassword: ${this.state.password}`);
  };

  render() {
    return (
      <div>
        <section className="login-section section-padding" id="log-in">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-6 col-xl-5">
                <div className="login-form box">
                  <h2 className="form-title text-center">Log in to your account</h2>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="d-flex mb-2 justify-content-end">
                        <a href="">Forgot Password?</a>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-theme btn-block btn-form">
                      Log in
                    </button>
                    <p className="text-center mt-4 mb-0">
                      Don't have an account? <a href="#">Sign up</a>
                    </p>
                  </form>
                  <div className="ispis">
                    <p>Email: {this.state.email}</p>
                    <p>Password: {this.state.password}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LoginSection;
