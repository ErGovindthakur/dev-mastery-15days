import axios from "axios";
const userBaseUrl = "http://localhost:9090/api/v1/user";
const TodoBaseUrl = "http://localhost:9090/api/v1/todo";


export const registerUser = (data) => axios.post(`${userBaseUrl}/register`,data,{withCredentials:true});
export const loginUser = (data) => axios.post(`${userBaseUrl}/login`,data,{withCredentials:true});
export const logoutUser = () => axios.get(`${userBaseUrl}/logout`,{withCredentials:true});


// Todos endpoints
export const getAllTasks = () => axios.get(`${TodoBaseUrl}/getAllTodos`,{withCredentials:true});