import React, {Component} from 'react';
import {FILTER_ALL} from '../../services/filter';
import {objectWithOnly, wrapChildrenWith} from '../../util/common';
import {getAll, newTodo, updateStatus} from '../../services/todo';

class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            filter: FILTER_ALL,
            list: getAll()
        }
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus'])
        });

        return <div>{children}</div>;
    }

    addNew(text) {
        let updatedList = newTodo(this.state.list, {text, completed: false});

        this.setState({list: updatedList});
    }

    changeFilter(filter) {
        this.setState({filter});
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.list, itemId, completed);

        this.setState({list: updatedList});
    }

}

export default StateProvider;
