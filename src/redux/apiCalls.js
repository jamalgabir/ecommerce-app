import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {puplicReuest} from '../requestMethod';

export const login = async (dispatch,user)=>{
   dispatch(loginStart());
   try{
       const res = await puplicReuest.post('/login',user)
       dispatch(loginSuccess(res.data))
   }
   catch(error){
       dispatch(loginFailure())
   }
};