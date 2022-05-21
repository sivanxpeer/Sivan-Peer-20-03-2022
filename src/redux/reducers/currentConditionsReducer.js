import '../actions'

const currentConditionsReducer = (state = { currentCondition: [] }, action) => {
    switch (action.type) {
        case "GET_CURRENT_CONDITIONS":
            return (
                {
                    currentCondition: action.payload
                }
            )
        default:
            return state
    }
}

export default currentConditionsReducer