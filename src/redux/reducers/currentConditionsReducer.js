import '../actions'

const currentConditionsReducer = (state = { currentCondition: [] }, action) => {
    // console.log(state.currentCondition)
    //maybe add isDayTime
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