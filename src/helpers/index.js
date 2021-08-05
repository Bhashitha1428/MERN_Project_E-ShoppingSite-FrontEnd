import axios from "axios";
import { api } from "../urlConfig";

const token=localStorage.getItem('token')

const axiosInstance=axios.create({
    baseURL:api,
    Headers:{
        'Authorization':token? `Bearer ${token}`:''
    }
})


export default axiosInstance