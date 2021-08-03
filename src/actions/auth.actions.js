import axios from "../helpers"
import { authConstant } from "./constant"

export const login=(user)=>{

   
    return async(dispatch)=>{
       

        dispatch({type:authConstant.LOGIN_REQUEST})

        const res= await axios.post('/admin/signin',{
            ...user
        })
      
        if(res.status==200){
            
            const {token,user}=res.data
            
            localStorage.setItem('token',token)
            dispatch({
                type:authConstant.LOGIN_SUCCESS,
                payload:{
                    user
                }
            
            })
        }
        else if(res.status==400){
            dispatch({
                type:authConstant.LOGIN_FAIL
            })
        }
        
    
        
      
    }
      
}

export const isUserLoggedIn =()=>{
    console.log('isUserLogins')
    const token=localStorage.getItem('token')
        console.log(token)
    return async (dispatch)=>{
        //console.log("llllooooo")
        const token=localStorage.getItem('token')
        console.log(token)
        if(token){
            //const user=JSON.parse(localStorage.getItem('user'));
            dispatch({
                type:authConstant.LOGIN_SUCCESS,
                payload:{
                    token
                }
            })
        }
        else{
            dispatch({
                type:authConstant.LOGIN_FAIL,
                payload:{error:'Failed to Login'}
            })
        }
    }

}