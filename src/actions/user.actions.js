import { userConstant } from "./constant"
import axios from '../helpers'


export const signup=(user)=>{

    return async (dispatch)=>{
       dispatch({type:userConstant.USER_REGISTER_REQUEST})



         const res=await axios.post('/user/signup',{
             ...user
         })

         console.log(res.data)
         if(res.status==201){
          dispatch({
              type:userConstant.USER_REGISTER_SUCCESS,
              payload:{
                  user:res.data.user
              }
          })
         }
         else if(res.status==400){
             dispatch({
                 type:userConstant.USER_REGISTER_FAIL,
                 payload:{
                     err:res.data.err
                 }
             })
         }


    }

    

}
