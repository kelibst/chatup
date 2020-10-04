const initState = {
    projects: [
        {id: '1', title: 'going home tomorrow guys', content: 'Hello guys, I was thinking of going home tomorrow'},
        {id: '2', title: 'going to accra tomorrow guys', content: 'Hello guys, I was thinking of going accra tomorrow'},
        {id: '3', title: 'going to Aflao tomorrow guys', content: 'Hello guys, I was thinking of going to Aflao tomorrow'},
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer