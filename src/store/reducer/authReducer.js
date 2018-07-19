import AuthAction from '../action/authAction';

const INITIAL_STATE = {
    user: null,
    isLoading: false,
    isError: false,
    errMsg: ''
}

export default function authReducer(state = INITIAL_STATE, action){
    switch(action.type){

        case(AuthAction.SIGNUP_PRO):
            return Object.assign({}, state, {isLoading: true});
        
        case(AuthAction.SIGNUP_ERR):
            return Object.assign({}, state,{isError: true, errMsg: action.payload});

        case AuthAction.SIGNUP_SUC:
            break;

        case(AuthAction.CHECK_USER_PRO):
            return Object.assign({}, state, {isLoading:true});

        case(AuthAction.CHECK_USER_SUC):
            return Object.assign({}, state, {user:action.payload, isLoading:false});

        case(AuthAction.SIGNIN_PRO):
            return Object.assign({}, state, {isLoading:true});

        case(AuthAction.SIGNIN_SUC):
            return Object.assign({}, state, {user:action.payload, isLoading:false});

        case(AuthAction.SIGNIN_ERR):
            return Object.assign({}, state, {isLoading:false, isError:true, errMsg:action.payload});

        case(AuthAction.SIGNOUT_PRO):
            return Object.assign({}, state, {isLoading:true});
        
        

        case(AuthAction.SIGNOUT_SUC):
            return Object.assign({}, state, {isLoading:false, user:action.payload});

        case(AuthAction.SIGNOUT_ERR):
            return Object.assign({}, state, {isLoading:false, isError: true, errMsg: action.payload});
        
            default:
            return state;
    }
}