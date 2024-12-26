import axios from "axios";
import { createContext } from "react";


export const SubjectContext = createContext()

export default function SubjectContextProvider({children}){

    let token ={
        token: localStorage.getItem('tokenUser'),
    }

    function getAllSubjects(){
        return axios.get(`https://exam.elevateegy.com/api/v1/subjects`,{
            headers: token
        })
        .then((response)=> response)
        .catch((error)=> error);
        
    }

    return <>
    <SubjectContext.Provider value={{getAllSubjects}} >
        {children}
    </SubjectContext.Provider>
    </>
}

