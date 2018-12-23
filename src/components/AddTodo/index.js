import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    withStyles,
    TextField,
    Paper,
    Button,
    Grid,
    InputLabel,
    FormControl,
    NativeSelect
} from "@material-ui/core";

const styles = theme => ({
    formControl: {
        minWidth: 120
    }
});

class AddTodo extends Component {
    handleAddClick = () => {
        const name = this.inputTodoName.value;
        const priority = this.inputTodoPriority.value;
        const operation = this.props.addTaskClick(name, priority);
        if (operation) {
            this.inputTodoName.value = "";
            this.inputTodoPriority.value = "";
        }
    };

    render() {
        const { classes } = this.props;
        return (
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
                            onClick={this.handleAddClick}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

AddTodo.propTypes = {
    addTaskClick: PropTypes.func.isRequired
};

export default withStyles(styles)(AddTodo);
