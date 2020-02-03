export const FILTER_ALL = 'all';
export const FILTER_ACTIVE = 'Available';
export const FILTER_COMPLETED = 'Deleted';

export function applyFilter(list, filter) {
    switch (filter) {
        case FILTER_COMPLETED:
            return list.filter(item => item.completed === true);

        case FILTER_ACTIVE:
            return list.filter(item => item.completed !== true);

        default:
            return list;
    }
}


export function getOptions() {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Available',
        [FILTER_COMPLETED]: 'Deleted'
    };
}
