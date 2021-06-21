import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

const initState = {
    authError: null
}

const persistConfig = {
    key: "auth",
    storage: storage,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNIN_ERROR':
            console.log("AUTHERROR", action.err)
            return {
                ...state,
                authError: action.err
            }

        case 'SIGNIN_SUCCESS':
            return {
                ...state,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            return state

        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default persistReducer(persistConfig, authReducer);