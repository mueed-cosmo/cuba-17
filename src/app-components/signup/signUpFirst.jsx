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
import { ForgotPassword, CreateAccount } from "../../constant";
import { Facebook, Twitter } from "react-feather";
class signUpFirst extends Component {
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
                      src={require("../../assets/images/logo/login.png")}
                      alt="looginpage"
                    />
                    <img
                      className="img-fluid for-dark"
                      src={require("../../assets/images/logo/logo_dark.png")}
                      alt="looginpage"
                    />
                  </a>
                </div>
                <div className="login-main login-tab">
                  <Form className="theme-form">
                    <h4>Enter Details</h4>
                    <p>{"Lets Provision Your Instance"}</p>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <Label className="col-form-label">Name</Label>
                          <Input
                            className="form-control"
                            type="text"
                            required=""
                            name="text"
                            onChange={this.handleChange}
                            required={true}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <Label className="col-form-label">Email</Label>
                          <Input
                            className="form-control"
                            name="last_name"
                            type="text"
                            onChange={this.handleChange}
                            required={true}
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="12">
                        <FormGroup>
                          <Label className="col-form-label">{Password}</Label>
                          <Input
                            className="form-control"
                            name="password"
                            type={
                              this.state.togglePassword ? "text" : "password"
                            }
                            onChange={this.handleChange}
                            required={true}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <FormGroup>
                          <Label className="col-form-label">
                            Confirm {Password}
                          </Label>
                          <Input
                            className="form-control"
                            name="password_confirm"
                            type={
                              this.state.togglePassword ? "text" : "password"
                            }
                            onChange={this.handleChange}
                            required={true}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="form-group mb-0">
                      <Button color="primary" className="btn-block">
                        Create Account
                      </Button>
                    </div>

                    <p className="mt-4 mb-0">
                      {"Already have an account?"}
                      <a className="ml-2" href="/">
                        Sign in
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

export default signUpFirst;
