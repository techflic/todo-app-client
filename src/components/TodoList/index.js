import React from "react";
import PropTypes from "prop-types";
import { TodoItem } from "../../containers";
import { Paper, List } from "@material-ui/core";

const TodoList = props => {
    const {
        todos,
        showArchived,
        requestingTodo,
        editingTodo,
        deleting,
        creatingTodo,
        uploading
    } = props.todo;

    const archivedArr =
        todos && todos.length && showArchived
            ? todos
                  .filter(_todo => _todo.archived)
                  .sort((a, b) => {
                      if (a.createdAt < b.createdAt) return -1;
                      if (a.createdAt > b.createdAt) return 1;
                      return 0;
                  })
            : [];

    const unArchivedArr =
        todos && todos.length && !showArchived
            ? todos
                  .filter(_todo => !_todo.archived)
                  .sort((a, b) => {
                      if (a.createdAt < b.createdAt) return -1;
                      if (a.createdAt > b.createdAt) return 1;
                      return 0;
                  })
            : [];

    const _todos = archivedArr.concat(unArchivedArr);
    
    return (
        <React.Fragment>
            {(requestingTodo ||
                editingTodo ||
                deleting ||
                creatingTodo ||
                uploading) && (
                <div style={{ marginLeft: "50%" }}>
                    <img
                        height="20px"
                        width="20px"
                        alt="logging-In..."
                        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    />
                </div>
            )}
            {_todos.length && !requestingTodo ? (
                <Paper style={{ margin: 16 }}>
                    <div id="divToPrint">
                        <List>
                            {_todos.map(_todo => (
                                <TodoItem
                                    key={_todo._id}
                                    {..._todo}
                                />
                            ))}
                        </List>
                    </div>
                </Paper>
            ) : null}
        </React.Fragment>
    );
};

TodoList.propTypes = {
    todo: PropTypes.shape({
        todos: PropTypes.array,
        creatingTodo: PropTypes.bool,
        deleting: PropTypes.bool,
        editingTodo: PropTypes.bool,
        requestingTodo: PropTypes.bool,
        showArchived: PropTypes.bool,
        uploading: PropTypes.bool
    }).isRequired
};

export default TodoList;
