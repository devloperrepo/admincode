import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  CustomInput,
  FormGroup,
  Row,
  Col,
  UncontrolledTooltip,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import img1 from "../../assets/images/logo-icon.png";
import img2 from "../../assets/images/background/login-register.jpg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginUser } from "../../actions/auth.actions";
const sidebarBackground = {
  backgroundImage: "url(" + img2 + ")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom center",
};

class Login extends Component {

  handleClick = () => {
    var elem = document.getElementById("loginform");
    elem.style.transition = "all 2s ease-in-out";
    elem.style.display = "none";
    document.getElementById("recoverform").style.display = "block";
  }

  submitLogin = async (username, password, setStatus, setSubmitting) => {
    setStatus();
    var response = await this.props.dispatch(loginUser({email: username, password}));
    setSubmitting(false);
    if(response.status == 0){
          setStatus("");
    }else{
      const { from } = this.props.location.state || {
              from: { pathname: "/" },
      };
      this.props.history.push(from);
    }
    return;
    // AuthenticationService.login(username, password).then(
    //   (user) => {
    //     const { from } = this.props.location.state || {
    //       from: { pathname: "/" },
    //     };
    //     this.props.history.push(from);
    //   },
    //   (error) => {
    //     setSubmitting(false);
    //     setStatus(error);
    //   }
    // );
  }

  render() {
    return (
      <div className="">
        {/*--------------------------------------------------------------------------------*/}
        {/*Login Cards*/}
        {/*--------------------------------------------------------------------------------*/}
        <div
          className="auth-wrapper d-flex no-block justify-content-center align-items-center"
          style={sidebarBackground}
        >
          <div className="auth-box on-sidebar">
            <div id="loginform">
              <div className="logo">
                <span className="db">
                  <img src={img1} alt="logo" />
                </span>
                <h5 className="font-medium mb-3">Sign In to Admin</h5>
                <div className="alert alert-success">
                  Username: admin@gmail.com & Password: 123456@aA
              </div>
              </div>
              <Row>
                <Col xs="12">
                  <Formik
                    initialValues={{
                      username: "admin@gmail.com",
                      password: "123456@aA",
                    }}
                    validationSchema={Yup.object().shape({
                      username: Yup.string().required("Username is required"),
                      password: Yup.string().required("Password is required"),
                    })}
                    onSubmit={({ username, password }, { setStatus, setSubmitting }) => { this.submitLogin(username, password, setStatus, setSubmitting) }}
                    render={({ errors, status, touched, isSubmitting }) => (
                      <Form className="mt-3" id="loginform">
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ti-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>

                          <Field
                            name="username"
                            type="text"
                            className={
                              "form-control" +
                              (errors.username && touched.username
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="username"
                            component="div"
                            className="invalid-feedback"
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ti-pencil"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Field
                            name="password"
                            type="password"
                            className={
                              "form-control" +
                              (errors.password && touched.password
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="invalid-feedback"
                          />
                        </InputGroup>
                        <div className="d-flex no-block align-items-center mb-3">
                          <CustomInput
                            type="checkbox"
                            id="exampleCustomCheckbox"
                            label="Remember Me"
                          />
                          <div className="ml-auto">
                            <a
                              href="#recoverform"
                              id="to-recover"
                              onClick={this.handleClick.bind(null)}
                              className="forgot text-dark float-right"
                            >
                              <i className="fa fa-lock mr-1"></i> Forgot pwd?
                          </a>
                          </div>
                        </div>
                        <Row className="mb-3">
                          <Col xs="12">
                            <button
                              type="submit"
                              className="btn btn-block btn-primary"
                              disabled={isSubmitting}
                            >
                              Login
                          </button>
                          </Col>
                        </Row>
                        <div className="text-center mb-2">
                          <div className="social">
                            <Button
                              id="UncontrolledTooltipExample1"
                              className="btn-facebook mr-2"
                              color="primary"
                            >
                              <i
                                aria-hidden="true"
                                className="fab fa-facebook-f"
                              ></i>
                            </Button>
                            <UncontrolledTooltip
                              placement="top"
                              target="UncontrolledTooltipExample1"
                            >
                              Facebook
                          </UncontrolledTooltip>
                            <Button
                              id="UncontrolledTooltipExample2"
                              className="btn-googleplus"
                              color="danger"
                            >
                              <i
                                aria-hidden="true"
                                className="fab fa-google-plus-g"
                              ></i>
                            </Button>
                            <UncontrolledTooltip
                              placement="top"
                              target="UncontrolledTooltipExample2"
                            >
                              Google Plus
                          </UncontrolledTooltip>
                          </div>
                        </div>
                        {status && (
                          <div className={"alert alert-danger"}>{status}</div>
                        )}
                      </Form>
                    )}
                  />
                </Col>
              </Row>
            </div>
            <div id="recoverform">
              <div className="logo">
                <span className="db">
                  <img src={img1} alt="logo" />
                </span>
                <h5 className="font-medium mb-3">Recover Password</h5>
                <span>
                  Enter your Email and instructions will be sent to you!
              </span>
              </div>
              <Row className="mt-3">
                <Col xs="12">
                  <Form action="/dashbaord">
                    <FormGroup>
                      <Input
                        type="text"
                        name="uname"
                        bsSize="lg"
                        id="Name"
                        placeholder="Username"
                        required
                      />
                    </FormGroup>
                    <Row className="mt-3">
                      <Col xs="12">
                        <Button color="danger" size="lg" type="submit" block>
                          Reset
                      </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps (state) {
  // console.log(state);
  return {
    loginUser: state.authReducer.loginUser,
  // updateLanguage: state.dashReducer.updateLanguage 
  }
}

function mapDispatchToProps (dispatch) {
  return {dispatch}
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);