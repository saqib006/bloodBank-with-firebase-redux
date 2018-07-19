export default class DbAction{
    static ADD_DONOR_PRO = 'ADD_DONOR_PRO';
    static ADD_DONOR_SUC = 'ADD_DONOR_SUC';
    static ADD_DONOR_ERR = 'ADD_DONOR_ERR';

    static GET_DONOR_PRO = 'GET_DONOR_PRO';
    static GET_DONOR_SUC = 'GET_DONOR_SUC';
    static GET_DONOR_ERR = 'GET_DONOR_ERR';


    static addDonor(payload){
        return{
            type:DbAction.ADD_DONOR_PRO,
            payload:payload
        }
    }

    static addDonorSuc(payload){
        return{
            type:DbAction.ADD_DONOR_SUC,
            payload:payload
        }
    }
    

    static addDonorErr(msg){
        return{
            type:DbAction.ADD_DONOR_ERR,
            payload:msg
        }
    }

    static getDonor(){
        return {
            type:DbAction.GET_DONOR_PRO
        }
    }

    static getDonorErr(msg){
        return{
            type:DbAction.GET_DONOR_ERR,
            payload:msg
        }
    }
}