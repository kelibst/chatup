const initState = {
    projects: [
        {id: '1', title: 'going home tomorrow guys', content: 'Hello guys, I was thinking of going home tomorrow'},
        {id: '2', title: 'going to accra tomorrow guys', content: 'Hello guys, I was thinking of going accra tomorrow'},
        {id: '3', title: 'going to Aflao tomorrow guys', content: 'Hello guys, I was thinking of going to Aflao tomorrow'},
    ]
}

const projectReducer = (state = initState, action) => {

    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR': 
            console.log('Created project err', action.err)
            return state;

        default:
            return state
    }
}

export default projectReducer