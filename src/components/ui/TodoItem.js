import React from 'react';
import CheckBox from './CheckBox';
import {classNames} from '../../util/common';

export default function TodoItem(props) {
    const {data, changeStatus} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);

    return (
        <li>
            <div className="checkbox">
                <label className={classNames.TODO_TEXT}>
                    <CheckBox checked={data.completed} onChange={handleChange}/> {data.text}
                </label>
            </div>
        </li>
    );
}
