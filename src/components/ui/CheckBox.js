import React, {Component} from 'react';
import {classNames} from '../../util/common';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
    }

    handleChange(e) {
        const {checked} = e.target;

        this.setState({checked});
        this.props.onChange(checked);
    }

    render() {
        return (<input type="checkbox" className={classNames.TODO_CHECKBOX} checked={this.state.checked} onChange={this.handleChange.bind(this)}/>);
    }
}

export default CheckBox;
