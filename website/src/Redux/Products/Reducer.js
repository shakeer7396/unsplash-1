
let initState = {data:[]}

export const getDataReducer = (state=initState,action)=>{
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                data:action.payload
            }
        default:
            return state
    }
}
