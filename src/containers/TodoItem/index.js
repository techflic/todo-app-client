import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { todoActions } from "../../store";
import { authHeader, getBackground, getTitle } from "../../commons";
import {
    ListItem,
    Checkbox,
    ListItemText,
    ListItemSecondaryAction,
    Button,
    FormControl,
    Tooltip
} from "@material-ui/core";
import {
    DeleteForever,
    Archive,
    Unarchive,
    CloudUpload,
    CloudDownload,
    LabelImportantOutlined
} from "@material-ui/icons";

class TodoItem extends Component {
    archiveClick = (todoId, value) => {
        const { dispatch } = this.props;
        dispatch(todoActions.editTodo(todoId, { archived: !value }));
    };

    deleteClick = todoId => {
        const { dispatch } = this.props;
        dispatch(todoActions.deleteTodo(todoId));
    };

    completedClick = (e, value, todoId) => {
        const { dispatch } = this.props;
        dispatch(todoActions.editTodo(todoId, { completed: !value }));
    };

    uploadClick = todoId => {
        const { dispatch } = this.props;
        const file = this.fileTnput.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            dispatch(todoActions.uploadFile(todoId, formData));
        }
    };

    viewAttachmentClick = todoId => {
        const { user } = this.props;
        /*Work around In case you want to download file without Auth */
        // window.open(`http://127.0.0.1:3001/api/v1/todo/upload/${user.user.id}/${todoId}`)

        fetch(
            `http://127.0.0.1:3001/api/v1/todo/upload/${
                user.user.id
            }/${todoId}`,
            {
                method: "GET",
                headers: authHeader()
            }
        )
            .then(response => response.blob())
            .then(blob => {
                const objectURL = URL.createObjectURL(blob);
                /*In case you want to display it on window */
                window.location = objectURL

                /*In case you want to display it somewhere on page ( doesn't work for PDF ) */
                // const myImage = document.getElementById(todoId)
                // myImage.src = objectURL;

                /*In case you want to download file */
                // if (window.navigator.msSaveOrOpenBlob) {
                //     // For IE:
                //     navigator.msSaveBlob(blob, "download");
                // } else {
                //     // For other browsers:
                //     let link = document.createElement("a");
                //     link.href = objectURL;
                //     link.download = "download";
                //     link.click();
                //     URL.revokeObjectURL(objectURL);
                // }
            });
    };
    
    render() {
        const {
            _id,
            name,
            priority,
            archived,
            attachment,
            completed
        } = this.props;
        
        return (
            <ListItem divider>
                <Tooltip
                    style={{ padding: "12px" }}
                    title={getTitle(priority)}
                    placement="top"
                >
                    <div>
                        <LabelImportantOutlined
                            style={{
                                float: "left",
                                color: getBackground(priority)
                            }}
                        />
                    </div>
                </Tooltip>
                <Tooltip title="Edit" placement="top">
                    <Checkbox
                        checked={completed}
                        color="primary"
                        onChange={e => this.completedClick(e, completed, _id)}
                    />
                </Tooltip>
                <ListItemText
                    style={{
                        textDecoration: completed ? "line-through" : null
                    }}
                    primary={name}
                />
                <ListItemSecondaryAction>
                    {attachment ? (
                        <Button
                            color="primary"
                            aria-label="View attachment"
                            onClick={() => this.viewAttachmentClick(_id)}
                            style={{ paddingRight: 36 }}
                        >
                            <CloudDownload style={{ marginRight: 10 }} />
                            View
                        </Button>
                    ) : (
                        <FormControl style={{ display: "inline" }}>
                            <input
                                style={{ display: "none" }}
                                id="contained-button-file"
                                type="file"
                                onChange={() => this.uploadClick(_id)}
                                ref={ref => {
                                    this.fileTnput = ref;
                                }}
                            />
                            <label htmlFor="contained-button-file">
                                <Button color="primary" component="span">
                                    <CloudUpload  style={{ marginRight: 10 }}  />
                                    Attach
                                </Button>
                            </label>
                        </FormControl>
                    )}
                    {archived ? (
                        <Button
                            color="primary"
                            aria-label="UnArchive Todo"
                            onClick={() => this.archiveClick(_id, archived)}
                        >
                            <Unarchive style={{ marginRight: 10 }} />
                            UnArchive
                        </Button>
                    ) : (
                        <Button
                            color="primary"
                            aria-label="Archive Todo"
                            onClick={() => this.archiveClick(_id, archived)}
                        >
                            <Archive style={{ marginRight: 10 }} />
                            Archive
                        </Button>
                    )}
                    <Button
                        color="primary"
                        aria-label="Delete Todo"
                        onClick={() => this.deleteClick(_id)}
                    >
                        <DeleteForever style={{ marginRight: 10 }} />
                        Delete
                    </Button>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

TodoItem.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    attachment: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    const {user} = state
    return {
        user
    }
}

export default connect(mapStateToProps)(TodoItem);
