import axios from "axios";
import jwt_decode from "jwt-decode";
import { User } from "../interfaces/User";



const api: string = process.env.REACT_APP_API || " ";

// Add new user
export const addUser = (newUser: User): Promise<any> =>
  axios.post(`${api}register`, newUser);

//check for existing user
export const checkUser = (user: User): Promise<any> =>
  axios.post(`${api}login`, user);

// export const getUser = (): Promise<any> =>
//   axios.get(`${api}profile`, {
//     headers: { Authorization: `${sessionStorage.getItem("token")}` },
//   });


  // get payload from token using jwt-decode
export const getBiz=() =>{
    return (jwt_decode(sessionStorage.getItem("token") as string) as any).biz ;
    
};



