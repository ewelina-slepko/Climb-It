const initState = {
    projects: [
        { id: '1', date: 'rrrr-mm-dd', location: 'Mirów', rockName: 'Dupa Słonia' },
        { id: '1', date: 'rrrr-mm-dd', location: 'Mirów', rockName: 'Dupa Słonia' },
        { id: '1', date: 'rrrr-mm-dd', location: 'Mirów', rockName: 'Dupa Słonia' },
    ]
};



const projectReducer = (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'CREATE_ROUTE':
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer;
