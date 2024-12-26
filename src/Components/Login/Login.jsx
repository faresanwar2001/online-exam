import axios from "axios";
import { useFormik } from "formik"
import { useState } from "react";
import  toast  from 'react-hot-toast';
import { useNavigate } from "react-router-dom";





const Login = ()=>{

    const [error, setError] = useState(null);
    const navigate =useNavigate()

     function  handleRegister(value){
        console.log(value);
         axios.post(`https://exam.elevateegy.com/api/v1/auth/signin`,value)        
        .then(response => {
            console.log(response.data);
            if(response?.data?.message === "success"){
                localStorage.setItem("tokenUser",response.data.token)
                navigate("/")
                toast.success("Login Successfully");

            }
        }).catch(err => {
            console.log(err);
            setError(err.response.data.error);
            toast.error("Login Failed");

            
        });
        
      }
    
      const formik = useFormik({
        initialValues:{
         
          email:"",
          password:"",
    
        },onSubmit: handleRegister
    
      })


    return<>
    

<form className="max-w-md mx-auto my-20" onSubmit={formik.handleSubmit}>
    <h1 className="text-start font-bold text-[20px] my-10">Register Now</h1>






  <div className="relative z-0 w-full mb-5 group">
    <input type="email" name="email" id="floating_email"
     value={formik.values.email}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
    <input type="password" name="password" id="floating_email"
     value={formik.values.password}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>



  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


    </>
}
export default Login;