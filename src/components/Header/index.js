import React from "react";
import { Link } from "react-router-dom";
import { HeaderUtils } from "../../containers";
import {
    withStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const styles = theme => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbar: {
        textAlign: "center",
        justifyContent: "space-between"
    }
});

const Header = props => {
    const { classes } = props;
    
    return (
        <AppBar position="static" color="primary">
            <Toolbar className={classes.toolbar}>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Open drawer"
                >
                    <Menu />
                </IconButton>
                <Typography
                    variant="h4"
                    color="inherit"
                    className={classes.grow}
                    noWrap
                >
                    Todo Dashboard
                </Typography>
                <HeaderUtils />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    component={Link}
                    to="/login"
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

const MuiHeader = withStyles(styles)(Header);
export default MuiHeader;
