const defaultState = {}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "test":
            console.log(test)
            return state
    
        default:
            return state
    }
}