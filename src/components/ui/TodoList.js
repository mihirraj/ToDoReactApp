import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import {applyFilter} from '../../services/filter';
import {classNames} from '../../util/common';


export default function TodoList(props) {
    const {list, filter} = props.data;
    const {addNew, changeFilter, changeStatus} = props.actions;
    const items = (applyFilter(list, filter));
    const initialValue = list.filter(item => item.completed === true).length
    const checkedCount  = (initialValue) ? initialValue : 0;
    const uncheckedCount = list.length - checkedCount;

    return (
        <div>
            <div>
                <div className={classNames.TODO_ITEM}>
                    <Header {...{addNew}}/>
                    <FilteredList {...{items, changeStatus}}/>
                    <Footer {...{checkedCount, uncheckedCount, filter, changeFilter}}/>
                </div>
            </div>
        </div>
    );
}
