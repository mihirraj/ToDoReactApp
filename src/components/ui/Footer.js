import React from 'react';
import Filter from './Filter';
import {classNames} from '../../util/common';

export default function Footer(props) {
const {filter, changeFilter, checkedCount, uncheckedCount} = props;

return (
<footer>
    <div className={classNames.TODO_TEXT}>
        {`${checkedCount} Deleted Item`}
    </div>
    <div className={classNames.TODO_TEXT}>
        {`${uncheckedCount} Items Available`}
    </div>
   <div>
   <Filter {...{filter, changeFilter}}/>
    </div>
</footer>
);
}
