import React from 'react';
import TodoItem from './TodoItem';
import {classNames} from '../../util/common';


export default function FilteredList(props) {
    const {items, changeStatus} = props;

    if (items.length === 0) {
        return (
            <p>There are no items</p>
        );
    }

    return (
        <ul className={classNames.TODO_ITEM}>
            {items.map(item => (
                <TodoItem key={item.id} data={item} changeStatus={changeStatus}/>
            ))}
        </ul>
    );
}
