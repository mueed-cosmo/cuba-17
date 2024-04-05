import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import { ForgotPassword, CreateAccount } from "../constant";
import { Facebook, Twitter } from "react-feather";

class Logins extends Component {
  state = {
    email: "test@example.com",
    password: "test123",
    EmailAddress: "Email Address",
    Password: "Password",
    togglePassword: false,
    data: {},
  };
  render() {
    const {
      email,
      password,
      EmailAddress,
      Password,
      togglePassword,
    } = this.state;
    return (
      <Container fluid={true} className="p-0">
        <Row>
          <Col xs="12">
            <div className="login-card">
              <div>
                <div>
                  <a className="logo" href="#javascript">
                    <img
                      className="img-fluid for-light"
                      src={require("../assets/images/logo/login.png")}
                      alt="looginpage"
                    />
                    <img
                      className="img-fluid for-dark"
                      src={require("../assets/images/logo/logo_dark.png")}
                      alt="looginpage"
                    />
                  </a>
                </div>
                <div className="login-main login-tab">
                  <Form className="theme-form">
                    <h4>Sign In</h4>
                    <p>{"Enter your email & password to login"}</p>
                    <FormGroup>
                      <Label className="col-form-label">{EmailAddress}</Label>
                      <Input
                        className="form-control"
                        type="email"
                        required=""
                        name="email"
                        onChange={this.handleChange}
                        defaultValue={email}
                        required={true}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className="col-form-label">{Password}</Label>
                      <Input
                        className="form-control"
                        name="password"
                        type={this.state.togglePassword ? "text" : "password"}
                        defaultValue={password}
                        onChange={this.handleChange}
                        required={true}
                      />
                      <div
                        className="show-hide"
                        onClick={this.setTogglePassword}
                      >
                        <span className={togglePassword ? "" : "show"}></span>
                      </div>
                    </FormGroup>
                    <div className="form-group mb-0">
                      <div className="checkbox ml-3">
                        <Input id="checkbox1" type="checkbox" />
                        <Label className="text-muted" for="checkbox1">
                          Remember Passsword
                        </Label>
                      </div>
                      <a
                        className="link"
                        href={`${process.env.PUBLIC_URL}/forgot-password`}
                      >
                        {ForgotPassword}
                      </a>
                      <Button
                        color="primary"
                        className="btn-block"
                        onClick={this.login}
                      >
                        Log In
                      </Button>
                    </div>
                    <h6 className="text-muted mt-4 or">{"Or Sign in with"}</h6>
                    <div className="social mt-4">
                      <div className="btn-showcase">
                        <Button color="light">
                          <Facebook className="txt-fb" />
                        </Button>
                        <Button color="light">
                          <i className="icon-social-google txt-googleplus"></i>
                        </Button>
                        <Button color="light">
                          <Twitter className="txt-twitter" />
                        </Button>
                      </div>
                    </div>
                    <p className="mt-4 mb-0">
                      {"Don't have account?"}
                      <a className="ml-2" href="/signup">
                        {CreateAccount}
                      </a>
                    </p>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  login = (e) => {
    e.preventDefault();
    var data = { ...this.state.data };
    if (!data.email || !data.password) {
      toast.error("Please Provide Valid Credentials");
    } else {
      localStorage.setItem("currentUser", data);
      this.props.history.push(`/panel/dashboard`);
    }
  };
  handleChange = ({ currentTarget: input }) => {
    var data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };
  setTogglePassword = () => {
    this.state.togglePassword
      ? this.setState({ togglePassword: false })
      : this.setState({ togglePassword: true });
  };
}

export default withRouter(Logins);
