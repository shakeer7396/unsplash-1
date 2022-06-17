import { FETCH_DATA_REQUEST ,FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from "./actionType";
import  axios  from "axios";
import { useDispatch } from "react-redux";


const fetchDataRequest=(payload) => {
    return {
        type: FETCH_DATA_REQUEST,
        payload
    }
}

const fetchDataSuccess=(payload) => {
   console.log(payload)
    return {
        type: FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchDataFailure=(payload) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload

    }
}


const fetchData=(payload)=> {
    return (dispatch) => {
        dispatch (fetchDataRequest(payload))
    
    
    axios.get("http://localhost:4000/CurrentEvents")

    .then(res=> dispatch(fetchDataSuccess(res.data)))
    .catch (err => dispatch(fetchDataFailure(err.data)))
}}