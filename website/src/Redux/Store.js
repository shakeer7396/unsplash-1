import { legacy_createStore as createStore ,applyMiddleware,compose,combineReducers} from "redux";
import { getDataReducer } from "./Products/Reducer";
import thunk from 'redux-thunk';
// import { signUpReducer } from "./Signup/reducer";
// import { loginReducer } from "./Login/reducer";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const rootReducer = combineReducers({getDataReducer})



export const store = createStore(rootReducer, enhancer);