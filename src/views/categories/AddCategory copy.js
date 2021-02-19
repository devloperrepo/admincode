import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Table, Row, Button,FormGroup,Col,Label,Input, FormText,CustomInput } from 'reactstrap';
import { connect } from "react-redux";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fetchApi } from "../../service/api";

const validationSchema  = 
    Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
    })



class Index extends Component {

    state = {
        initialValues : {
            first_name: "sadsd",
            password: "",
        }
    }
    componentDidMount() {
        // console.log(this.props.authData);
        this.setInit();
    }

    async setInit() {
        // const { token } = this.props.authData;
        // const response = await fetchApi("category/list", "GET", null, 200, token);
        // const { data, status } = response.responseBody;
        // if (status == 1) {
        //     this.setState({ categories: data.data })
        // } else {
        //     console.error("There seems to be some issue with API data");
        // }
    }

    
    submitForm = (data) => {
        alert("sdsd");
        console.log(data);
    }


    validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
          errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
          errors.email = "Invalid Email";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password too short";
        }
        return errors;
      };
    
    render() {
        return (
            <div>
                <h5 className="mb-4">Add New Category</h5>
                <Row>
                <Col md="12">
                <Card>
                    
                    <Formik
                    initialValues={this.state.initialValues}
                    validationSchema={validationSchema}
                    validate={this.validate}
                    onSubmit={this.submitForm}
                    >
                        
                        {(formik) => {
                        const {
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                        handleBlur,
                        isValid,
                        dirty
                        } = formik;
                        return (
                            <>
                            <Form onSubmit={handleSubmit}>
                            <CardBody>
                        
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>First Name</Label>
                                        <Input name="first_name" id="first_name"  type="text" placeholder="Shaina nehwal" />
                                        {errors.first_name && touched.first_name && (
                    <span className="error">{errors.first_name}</span>
                  )}    
                                        <ErrorMessage name="first_name">{msg => <div className="error error-message">{msg}</div>}</ErrorMessage>
                                        <FormText className="muted">This is inline help</FormText>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Last Name</Label>
                                        <Input type="text" placeholder="12n" />
                                        <FormText className="muted">This field has error.</FormText>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Select Gender</Label>
                                        <Input type="select" name="Select Gender">
                                            <option>Female</option>
                                            <option>Male</option>
                                        </Input>
                                        <FormText className="muted">Select your gender</FormText>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Date of Birth</Label>
                                        <Input type="date" placeholder="DOB Here" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Category</Label>
                                        <Input type="select" name="Select Category">
                                            <option>Category1</option>
                                            <option>Category2</option>
                                            <option>Category3</option>
                                            <option>Category4</option>
                                            <option>Category5</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Membership</Label>
                                        <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="Free" />
                                        <CustomInput type="radio" id="exampleCustomRadio4" name="customRadio" label="Paid" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        
                        </CardBody>
                        <CardBody className="border-top">
                        <Button type="submit" className="btn btn-success"> <i className="fa fa-check"></i> Save</Button>
                        <Button type="button" className="btn btn-dark ml-2">Cancel</Button>
                    </CardBody>
                    </Form>
                    </>
                    );
                }}
                    
                    </Formik>
                    
                    
                </Card>
            </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        authData: state.authReducer.authData,
    }
}

function mapDispatchToProps(dispatch) {
    return { dispatch }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);

