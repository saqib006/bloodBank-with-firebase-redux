import DbAction from '../action/dbAction';
import {Observable} from 'rxjs';
import {addData, getData} from '../../firebase/dbFireBase';
export class DbEpic{

   


    static addDonorOnFirebase(action$){
        return action$.ofType(DbAction.ADD_DONOR_PRO).switchMap(({payload})=>{
            return Observable.fromPromise(addData(payload)).map((payload)=>{
                return{
                    type:DbAction.ADD_DONOR_SUC,
                    payload:payload
                }
            }).catch((error)=>{
                return Observable.of(DbAction.addDonorErr(error.msg))
            })
        })
    }

    static getDonorFromFirebase(action$){
        return action$.ofType(DbAction.GET_DONOR_PRO).switchMap(({payload})=>{
            return Observable.fromPromise(getData()).map((array)=>{
                return{
                    type:DbAction.GET_DONOR_SUC,
                    payload:array
                }
            })
        }).catch((err)=>{
            return Observable.of(DbAction.GET_DONOR_ERR(err.msg));
        })
    }





 /*static getDonorFromFirebae(action$){
        return action$.ofType(DbAction.GET_DONOR_PRO).switchMap(()=>{
            return Observable.fromPromise(getData()).map((array)=>{
                return {
                    type:DbAction.GET_DONOR_SUC,
                    payload:array
                }
            }).catch((error)=>{
                return Observable.of(DbAction.GET_DONOR_ERR(error.message));
            })
        })
    }*/

}