import React, { Component } from "react";
import { Link } from "react-router-dom";
import StyledMain from "../../commons/styled/StyledMain";
import {
    Form as MyForm,
    Input,
    Button,
    Title,
    Text,
    Label
} from "../../commons/styled/StyledUtils";
import { Formik } from "formik";
import { connect } from "react-redux";
import { userActions } from "./../../store/actions/user.action";

class Register extends Component {
    render() {
        const { registering } = this.props
        return (
            <StyledMain>
                <Title>Register Yourself</Title>
                <Formik
                    initialValues = {{ name: "", email: "", password: "" }}
                    validate = {values => {
                        let errors = {};

                        if (!values.name) {
                            errors.name = "Name is required";
                        }

                        if (!values.email) {
                            errors.email = "Email is required";
                        }

                        if (!values.password) {
                            errors.password = "A password is required";
                        } else if (values.password.length < 3) {
                            errors.password = "Password must be more than 2 characters";
                        }

                        return errors;
                    }}
                    onSubmit = {(values, actions) => {
                        const { dispatch } = this.props;
                        dispatch(userActions.register(values));
                    }}
                    render = {({
                        touched,
                        errors,
                        values,
                        handleSubmit,
                        handleChange
                    }) => (
                        <MyForm onSubmit={handleSubmit}>
                            <Label>
                                Name *
                                <Input
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    border={
                                        touched.name &&
                                        errors.name &&
                                        "1px solid red"
                                    }
                                />
                                {touched.name && errors.name && (
                                    <Text color="red">{errors.name}</Text>
                                )}
                            </Label>
                            <Label>
                                Email *
                                <Input
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    border={
                                        touched.email &&
                                        errors.email &&
                                        "1px solid red"
                                    }
                                />
                                {touched.email && errors.email && (
                                    <Text color="red">{errors.email}</Text>
                                )}
                            </Label>
                            <Label>
                                Password *
                                {touched.password && errors.password && (
                                    <Text color="red">{errors.password}</Text>
                                )}
                                <Input
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    border={
                                        touched.password && 
                                        errors.password &&
                                        "1px solid red"
                                    }
                                />
                            </Label>
                            <Button type="submit">Submit</Button>
                            {registering && (
                                <img alt="Registering..." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            )}
                            <Link to="/login">cancel</Link>
                        </MyForm>
                    )}
                />
            </StyledMain>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        registering : state.user.registering
    }
}
export default connect(mapStateToProps)(Register)
