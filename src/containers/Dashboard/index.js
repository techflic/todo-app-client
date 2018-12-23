import React, { Component } from "react";
import { connect } from "react-redux";
import { todoActions } from "../../store";
import {
    Header,
    TodoList,
    AddTodo,
    Notifier,
    openSnackbar
} from "../../components";

class Dashboard extends Component {
    componentDidMount() {
        const { dispatch, user } = this.props;
        dispatch(todoActions.getTodo(user.user.id));
    }

    addTaskClick = (name, priority) => {
        const { dispatch, user } = this.props;
        if (name && priority) {
            dispatch(
                todoActions.createTodo({
                    owner: user.user.id,
                    name,
                    priority
                })
            );
            return true;
        } else {
            openSnackbar({ message: "Both Todo and Priority are Required." });
            return false;
        }
    };

    render() {
        const { todo } = this.props;
        return (
            <React.Fragment>
                <Notifier />
                <Header />
                <AddTodo addTaskClick={this.addTaskClick} />
                <TodoList todo={todo} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { user, todo } = state;
    return {
        user,
        todo
    };
};

export default connect(mapStateToProps)(Dashboard);
