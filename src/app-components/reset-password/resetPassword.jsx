import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import {
  NewPassword,
  RetypePassword,
  Done,
  EnterMobileNumber,
  EnterOTP,
  Resend,
  ResetPassword,
  RememberPassword,
  SignIn,
  Send,
} from "../../constant";

class resetPassword extends Component {
  state = { togglePassword: false };
  render() {
    return (
      <Container fluid={true}>
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
                <div className="login-main">
                  <Form className="theme-form">
                    <h4>{ResetPassword}</h4>

                    <h6 className="mt-4">{"Create Your Password"}</h6>
                    <FormGroup>
                      <Label className="col-form-label">{NewPassword}</Label>
                      <Input
                        className="form-control"
                        type={this.state.togglePassword ? "text" : "password"}
                        name="login[password]"
                        value={"test1234"}
                        required=""
                        placeholder="*********"
                      />
                      <div className="show-hide">
                        <span
                          className={this.state.togglePassword ? "" : "show"}
                          onClick={this.setTogglePassword}
                        ></span>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label className="col-form-label">{RetypePassword}</Label>
                      <Input
                        className="form-control"
                        type="password"
                        name="login[password]"
                        required=""
                        placeholder="*********"
                      />
                    </FormGroup>
                    <FormGroup className="mb-0">
                      <Button
                        color="primary"
                        className="btn-block"
                        type="submit"
                        onClick={() =>
                          this.props.history.replace(
                            `${process.env.PUBLIC_URL}/login`
                          )
                        }
                      >
                        {Done}
                      </Button>
                    </FormGroup>
                    <p className="mt-4 mb-0">
                      {"Already have an password?"}
                      <a
                        className="ml-2"
                        href={`${process.env.PUBLIC_URL}/login`}
                      >
                        {SignIn}
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
  setTogglePassword = () => {
    this.state.togglePassword
      ? this.setState({ togglePassword: false })
      : this.setState({ togglePassword: true });
  };
}

export default resetPassword;
