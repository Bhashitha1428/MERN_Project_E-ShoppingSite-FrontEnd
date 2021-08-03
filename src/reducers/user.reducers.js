import { userConstant } from "../actions/constant"


const initState = {
   
    errMsg:'',
    pending:false,
    registered:false,
    user:{}
}


export default (state=initState,action)=>{
    console.log(action)
    switch(action.type){
        case userConstant.USER_REGISTER_REQUEST:
            state={
                ...state,
                pending:true

            }
            break
        case userConstant.USER_REGISTER_SUCCESS:
            state={
                ...state,
                pending:false,
                registered:true,
                user:action.payload.user,
                
            }
            break
        case userConstant.USER_REGISTER_FAIL:
            state={
                ...state,
                
            }
            break
          
        }  
       console.log(state)
        return state;
    }






