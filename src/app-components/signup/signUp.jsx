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
import { Facebook, Twitter } from "react-feather";

class SignUp extends Component {
  state = {};
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
                    <h4>Sign Up</h4>
                    <FormGroup>
                      <Label className="col-form-label">
                        Enter Email Address
                      </Label>
                      <Row>
                        <Col md="12">
                          <Input
                            className="form-control mb-1"
                            type="email"
                            defaultValue="someone@test.com"
                          />
                        </Col>
                        <Col xs="12">
                          <Button
                            color="primary"
                            className="btn-block m-t-10"
                            type="button"
                            onClick={() =>
                              (window.location.href = `${process.env.PUBLIC_URL}/set-password`)
                            }
                          >
                            Next
                          </Button>
                          <h6 className="text-muted mt-4 or">
                            {"Or Sign up with"}
                          </h6>
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
                        </Col>
                      </Row>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;
