import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { connect } from "react-redux";
import { userActions } from "./../../store/actions/user.action";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Notifier from './../../components/notifier/Notifier';

const styles = theme => ({
    main: {
        width: "auto",
        display: "block", // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit *
            3}px ${theme.spacing.unit * 3}px`
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing.unit
    },
    submit: {
        marginTop: theme.spacing.unit * 3
    }
});

class Register extends Component {
    render() {
        const { registering, classes } = this.props;
        return (
            <main className={classes.main}>
                <Notifier />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AddIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register Yourself
                    </Typography>
                    <Formik
                        initialValues={{ name: "", email: "", password: "" }}
                        validate={values => {
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
                                errors.password =
                                    "Password must be more than 2 characters";
                            }

                            return errors;
                        }}
                        onSubmit={(values, actions) => {
                            const { dispatch } = this.props;
                            dispatch(userActions.register(values));
                        }}
                        render={({
                            touched,
                            errors,
                            values,
                            handleSubmit,
                            handleChange
                        }) => (
                            <form
                                onSubmit={handleSubmit}
                                className={classes.form}
                            >
                                <FormControl margin="normal" fullWidth>
                                    <InputLabel htmlFor="name">
                                        Name *
                                    </InputLabel>
                                    <Input
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        autoFocus
                                    />
                                    {touched.name && errors.name && (
                                        <FormHelperText
                                            style={{ color: "red" }}
                                        >
                                            {errors.name}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                                <FormControl margin="normal" fullWidth>
                                    <InputLabel htmlFor="email">
                                        Email Address *
                                    </InputLabel>
                                    <Input
                                        name="email"
                                        type="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText
                                            style={{ color: "red" }}
                                        >
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                                <FormControl margin="normal" fullWidth>
                                    <InputLabel htmlFor="password">
                                        Password *
                                    </InputLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                    />
                                    {touched.password && errors.password && (
                                        <FormHelperText
                                            style={{ color: "red" }}
                                        >
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Submit
                                </Button>
                                {registering && (
                                    <div style={{ textAlign: "center" }}>
                                        <img
                                            alt="Registering..."
                                            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                        />
                                    </div>
                                )}
                                <div
                                    style={{
                                        textAlign: "center",
                                        marginTop: "8px"
                                    }}
                                >
                                    <Link to="/login">cancel</Link>
                                </div>
                            </form>
                        )}
                    />
                </Paper>
            </main>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        registering: state.user.registering
    };
};

const MuiRegister = withStyles(styles)(Register);
export default connect(mapStateToProps)(MuiRegister);
