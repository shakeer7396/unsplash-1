import { FETCH_DATA_REQUEST ,FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from "./actionType";

const initState = {
    products : [],
    error : " ",
    loading:false

}
const reducer =(state = initState ,action) => {
    const {type,payload}=action;
    switch(type)
    {
        case FETCH_DATA_REQUEST:
         return {
            ...state,
            loading:true,
            error:" "
        }

        case FETCH_DATA_SUCCESS:
        return {
            ...state,
            products: payload,
            loading:false,
            error:" "
        }

        case FETCH_DATA_FAILURE:
            return {
                ... state,
                loading:false,
                error:payload
            }

            default:
                return state
    }

    

}

