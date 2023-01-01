import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import bookingReducer from "redux/reducers/bookingReducer";
import authenReducer from "redux/reducers/authenReducer";

const reducer = combineReducers({
    booking: bookingReducer,
    authen: authenReducer,
})

const store = createStore(
    reducer,
    composeWithDevTools( applyMiddleware(thunk))
);
export default store;