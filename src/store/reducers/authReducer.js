import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

const initState = {
    signinError: null,
    signupError: null
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
                signinError: action.err
            }

        case 'SIGNIN_SUCCESS':
            return {
                ...state,
                signinError: null,
                signupError: null
            }

        case 'SIGNOUT_SUCCESS':
            return state

        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                signinError: null,
                signupError: null
            }

        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                signupError: action.err
            }
        default:
            return state
    }
}

export default persistReducer(persistConfig, authReducer);