import React, { Component } from "react";
import { Link } from "react-router-dom";
import StyledMain from "../../commons/styled/StyledMain";
import {
    Form,
    Input,
    Button,
    Title,
    Text,
    Label
} from "../../commons/styled/StyledUtils";
import { userActions } from "./../../store/actions/user.action";
import { connect } from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);

        localStorage.removeItem("auth");
        localStorage.removeItem("user");

        this.state = {
            username: "",
            password: "",
            submitted: false
        };
    }
    loginClick = e => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    };
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <StyledMain>
                <Title>Welcome Back</Title>
                <Form onSubmit={this.loginClick}>
                    <Label>
                        Email *
                        <Input
                            border={submitted && !username && "1px solid red"}
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.handleInputChange}
                            placeholder="Email"
                        />
                        {submitted && !username && (
                            <Text color="red">Username is required</Text>
                        )}
                    </Label>
                    <Label>
                        Password *
                        <Input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleInputChange}
                            placeholder="Password"
                        />
                        {submitted && !password && (
                            <Text color="red">Password is required</Text>
                        )}
                    </Label>
                    <Button type="submit">Login</Button>
                    {loggingIn && (
                        <img alt="logging-In..."src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    )}
                    <Link to="/register">register</Link>
                </Form>
            </StyledMain>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { loggingIn } = state.user;
    return {
        loggingIn
    };
};
export default connect(mapStateToProps)(Login);
