import DbAction from '../action/dbAction';

const INITIAL_STATE={
    donorList:[],
    isLoading:false,
    isErr:false,
    errMsg:''
}

export default function DbReducer(state = INITIAL_STATE, action){
    switch(action.type){

        case(DbAction.ADD_DONOR_PRO):
            return Object.assign({}, state, {isLoading:true})
        case(DbAction.ADD_DONOR_SUC):
            return Object.assign({},state,{isLoading:false,donorList:[...state.donorList,action.payload]})
        case(DbAction.ADD_DONOR_ERR):
            return Object.assign({}, state, {isErr:true,isLoading:false, errMsg:action.payload})

        case(DbAction.GET_DONOR_PRO):
            return Object.assign({}, state, {isLoading:true})
        case(DbAction.GET_DONOR_SUC):
            return Object.assign({}, state,{isLoading:false, donorList:action.payload})
        case(DbAction.GET_DONOR_ERR):
            return Object.assign({}, state, {isErr:true,isLoading:false, errMsg:action.payload})

        
        default:
            return state
    }
}


