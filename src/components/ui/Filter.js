import React from 'react';
import {getOptions} from '../../services/filter';
import {classNames} from '../../util/common';

export default function Filter(props) {
    const options = getOptions();
    const {filter, changeFilter} = props;
    const getClass = (key) => (key === filter ? 'selected' : '');

    return (
        <ul>
            {Object.keys(options).map(key => (
                <li className={classNames.TODO_TEXT} key={key}>
                    <button onClick={() => changeFilter(key)} className={getClass(key)}>
                        {options[key]}
                    </button>
                </li>
            ))}
        </ul>
    );
}
