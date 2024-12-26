import  {Toaster}  from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import GetSubjects from './Components/GetSubjects/GetSubjects';
import SubjectContextProvider from './Context/SubjectContext';
import GetOneSubject from './Components/GetOneSubject/GetOneSubject';
import Notfound from './Components/Notfound/Notfound';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';


const routes= createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<ProtectedRoute><GetSubjects/></ProtectedRoute>},
    {path:"/getOneSubject/:subject",element:<ProtectedRoute><GetOneSubject/></ProtectedRoute>},
    {path:"/register", element:<Register/>},
    {path:"/login", element:<Login/>},
    {path:"*", element:<Notfound/>},
    
  ]}
])

function App() {

  return (
    <>
    <SubjectContextProvider>
    <RouterProvider router={routes}>
    </RouterProvider>
    <Toaster/>

    </SubjectContextProvider>
     
    </>
  )
}

export default App
