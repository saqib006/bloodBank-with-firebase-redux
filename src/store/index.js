import {combineReducers, createStore, applyMiddleware} from 'redux';
import { combineEpics, createEpicMiddleware } from "redux-observable";
import authReducer from './reducer/authReducer';
import DbReducer from './reducer/dbReducer';
import {authEpic} from './epics/authEpic';
import {DbEpic} from './epics/dbEpic';
import { loadState, saveState } from "../PersistState";

const persistedState = loadState();

let rootReducer = combineReducers({
    authReducer,
    DbReducer
});

export const rootEpic = combineEpics(

  authEpic.createUserOnFirebase,
  authEpic.updateUserProfile,
  authEpic.authStateChanged,
  authEpic.signInFromFirebase,
  authEpic.signOutFromFirebase,
  DbEpic.addDonorOnFirebase,
  DbEpic.getDonorFromFirebase,
  
)

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware);



export let store = createStore(
    rootReducer,
    persistedState,
    createStoreWithMiddleware,
  );

store.subscribe(()=>{
    saveState(store.getState());
})
