import React, { Component } from "react";
import { connect } from "react-redux";
import { todoActions } from "./../../store/actions/todo.action";
import TodoList from "./../todoList/TodoList";
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { TextField, Paper, Button, Grid, InputLabel } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Notifier, { openSnackbar } from './../../components/notifier/Notifier';

const styles = theme => ({
    root: {
        width: "100%"
    },
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
    },
    formControl: {
        minWidth: 120
    }
});

class Dashboard extends Component {
    componentDidMount() {
        const { dispatch, user } = this.props;
        dispatch(todoActions.getTodo(user.user.id));
    }
    exportPdfClick = () => {
        const input = document.getElementById("divToPrint");
        html2canvas(input).then(canvas => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "JPEG", 20, 20);
            //pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
        });
    };
    archiveClick = () => {
        const { dispatch } = this.props;
        dispatch(todoActions.toggleShowArchived());
    };
    addTaskClick = e => {
        const { dispatch, user } = this.props;
        const name = this.inputTodoName.value;
        const priority = this.inputTodoPriority.value;
        if (name && priority) {
            dispatch(
                todoActions.createTodo({
                    owner: user.user.id,
                    name,
                    priority
                })
            );
            this.inputTodoName.value = "";
            this.inputTodoPriority.value = "";
        }else{
            openSnackbar({message : "Both Todo and Priority are Required."})
        }
    };
    render() {
        const { showArchived, classes } = this.props;
        return (
            <React.Fragment>
                <Notifier />
                <AppBar position="static" color="primary">
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h4"
                            color="inherit"
                            className={classes.grow}
                            noWrap
                        >
                            Todo Dashboard
                        </Typography>
                        {showArchived ? (
                            <Button
                                color="inherit"
                                size="small"
                                onClick={this.archiveClick}
                            >
                                Show UnArchived
                            </Button>
                        ) : (
                            <Button
                                color="inherit"
                                size="small"
                                onClick={this.archiveClick}
                            >
                                Show Archived
                            </Button>
                        )}
                        <Button
                            color="inherit"
                            size="small"
                            onClick={this.exportPdfClick}
                        >
                            Export to PDF
                        </Button>
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
                <Paper style={{ margin: 40, padding: 16 }}>
                    <Grid container direction="row" alignItems="stretch">
                        <Grid
                            xs={6}
                            md={8}
                            item
                            container
                            alignItems="flex-end"
                            justify="center"
                        >
                            <TextField
                                name="todoName"
                                placeholder="Add Todo here"
                                inputRef={ref => {
                                    this.inputTodoName = ref;
                                }}
                                fullWidth
                                style={{ paddingRight: 16 }}
                            />
                        </Grid>
                        <Grid
                            xs={3}
                            md={2}
                            item
                            container
                            alignItems="flex-end"
                            justify="center"
                        >
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="todoPriority">
                                    Priority
                                </InputLabel>
                                <NativeSelect
                                    name="todoPriority"
                                    inputRef={ref => {
                                        this.inputTodoPriority = ref;
                                    }}
                                >
                                    <option value="" />
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid
                            xs={3}
                            md={2}
                            item
                            container
                            alignItems="flex-end"
                            justify="center"
                        >
                            <Button
                                color="primary"
                                variant="outlined"
                                onClick={this.addTaskClick}
                            >
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
                <div id="divToPrint">
                    <TodoList />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { user } = state;
    return {
        user,
        showArchived: state.todo.showArchived
    };
};

const MuiDashboard = withStyles(styles)(Dashboard);
export default connect(mapStateToProps)(MuiDashboard);
