import React, { Component } from "react";
import { StyledUl } from "./../../commons/styled/StyledUtils";
import TodoItem from "./../todoItem/TodoItem";
import { connect } from "react-redux";

class TodoList extends Component {
    render() {
        const { todo } = this.props;
        return (
            <StyledUl>
                {(todo.requestingTodo || todo.editingTodo || todo.deleting || todo.creatingTodo || todo.uploading) && (
                    <img
                        alt="logging-In..."
                        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    />
                )}
                {todo.showArchived ? (
                    todo.todos ? (
                        todo.todos
                            .filter(_todo => _todo.archived)
                            .map(_todo => (
                                <TodoItem key={_todo._id} {..._todo} />
                            ))
                    ) : (
                        <p>No Archived Todos</p>
                    )
                ) : todo.todos ? (
                    todo.todos
                        .filter(_todo => !_todo.archived)
                        .map(_todo => <TodoItem key={_todo._id} {..._todo} />)
                ) : (
                    <p>No Todos Yet</p>
                )}
            </StyledUl>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { todo } = state;
    return {
        todo
    };
};

export default connect(mapStateToProps)(TodoList);
