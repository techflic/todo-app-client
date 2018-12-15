import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { todoActions } from "../../store/actions/todo.action";
import { authHeader } from "../../commons/helpers/utils";
import {
    ListItem,
    Checkbox,
    ListItemText,
    ListItemSecondaryAction,
    Button
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Delete from "@material-ui/icons/DeleteForever";
import Archive from "@material-ui/icons/Archive";
import Unarchive from "@material-ui/icons/Unarchive";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import LabelIcon from "@material-ui/icons/LabelImportantOutlined";
import Tooltip from "@material-ui/core/Tooltip";

class TodoItem extends Component {
    archiveClick = (todoId, value) => {
        const { dispatch } = this.props;
        dispatch(todoActions.editTodo(todoId, { archived: !value }));
    };
    deleteClick = todoId => {
        const { dispatch } = this.props;
        dispatch(todoActions.deleteTodo(todoId));
    };
    uploadClick = todoId => {
        const { dispatch, user } = this.props;
        const file = this.fileTnput.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            dispatch(todoActions.uploadFile(todoId, formData));
        }
    };
    viewAttachmentClick = todoId => {
        const { dispatch, user } = this.props;
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
                // window.location = objectURL

                /*In case you want to display it somewhere on page ( doesn't work for PDF ) */
                // const myImage = document.getElementById(todoId)
                // myImage.src = objectURL;

                /*In case you want to download file */
                if (window.navigator.msSaveOrOpenBlob) {
                    // For IE:
                    navigator.msSaveBlob(blob, "download");
                } else {
                    // For other browsers:
                    var link = document.createElement("a");
                    link.href = objectURL;
                    link.download = "download";
                    link.click();
                    URL.revokeObjectURL(objectURL);
                }
            });
    };
    completedClick = (e, value, todoId) => {
        const { dispatch } = this.props;
        dispatch(todoActions.editTodo(todoId, { completed: !value }));
    };
    getBackground = value => {
        if (value.toLowerCase() === "high") return "#F44336";
        if (value.toLowerCase() === "medium") return "#FFEE58";
        if (value.toLowerCase() === "low") return "#B2FF59";
    };
    getTitle = value => {
        if (value.toLowerCase() === "high") return "High Priority";
        if (value.toLowerCase() === "medium") return "Medium Priority";
        if (value.toLowerCase() === "low") return "Low Priority";
    }
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
                <Tooltip style={{padding: "12px"}} title={this.getTitle(priority)} placement="top">
                    <div>
                        <LabelIcon
                            style={{
                                float: "left",
                                color: this.getBackground(priority)
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
                        >
                            <CloudDownloadIcon style={{ marginRight: 10 }} />
                            Download
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
                                <Button
                                    color="primary"
                                    component="span"
                                >
                                    <CloudUploadIcon
                                        style={{ marginRight: 36 }}
                                    />
                                    Upload
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
                        <Delete style={{ marginRight: 10 }} />
                        Delete
                    </Button>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

TodoItem.propTypes = {
    name: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    attachment: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
    const { todo, user } = state;
    return {
        todo,
        user
    };
};

export default connect(mapStateToProps)(TodoItem);
