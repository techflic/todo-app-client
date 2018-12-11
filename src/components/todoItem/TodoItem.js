import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    StyledList,
    StyledLabel,
    StyledButton,
    Input2,
    Form1
} from "./../../commons/styled/StyledUtils";
import { connect } from "react-redux";
import { todoActions } from "../../store/actions/todo.action";

class TodoItem extends Component {
    archiveClick = (todoId, value) => {
        const { dispatch } = this.props;
        dispatch(todoActions.editTodo(todoId, { archived: !value }));
    };
    deleteClick = todoId => {
        const { dispatch } = this.props;
        dispatch(todoActions.deleteTodo(todoId));
    };
    uploadClick = (e, todoId) => {
        e.preventDefault();
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
        window.open(`http://127.0.0.1:3001/api/v1/todo/upload/${user.user.id}/${todoId}`)
    };
    // editClick = todoId => {
    //     console.log(todoId);
    // };
    render() {
        const { _id, name, priority, archived, attachment } = this.props;
        return (
            <StyledList>
                <StyledLabel htmlFor={name} color={priority}>
                    {name}
                </StyledLabel>
                {attachment ? (
                    <StyledButton
                        type="button"
                        onClick={() => this.viewAttachmentClick(_id)}
                    >
                        View attachment
                    </StyledButton>
                ) : (
                    <Form1 onSubmit={e => this.uploadClick(e, _id)}>
                        <Input2
                            name="file"
                            type="file"
                            ref={ref => {
                                this.fileTnput = ref;
                            }}
                        />
                        <StyledButton style={{ float: "right" }} type="submit">
                            Upload
                        </StyledButton>
                    </Form1>
                )}
                <StyledButton
                    type="button"
                    onClick={() => this.deleteClick(_id)}
                >
                    Delete
                </StyledButton>
                {/* <StyledButton type="button" onClick={() => this.editClick(_id)}>
                    Edit
                </StyledButton> */}
                {archived ? (
                    <StyledButton
                        type="button"
                        onClick={() => this.archiveClick(_id, archived)}
                    >
                        Restore
                    </StyledButton>
                ) : (
                    <StyledButton
                        type="button"
                        onClick={() => this.archiveClick(_id, archived)}
                    >
                        Archive
                    </StyledButton>
                )}
            </StyledList>
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
