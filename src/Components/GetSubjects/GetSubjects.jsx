import { useContext, useEffect, useState,CSSProperties } from "react";
import { SubjectContext } from "../../Context/SubjectContext";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";


const GetSubjects = ()=>{

    let {getAllSubjects}=useContext(SubjectContext)
    const [allSubject,setAllSubject] = useState(null)
    const [isLoading,setLoading]= useState(false) 

    async function getSubjects(){
        setLoading(true)
        const subjects = await getAllSubjects()
        setLoading(false)
        console.log(subjects);
        setAllSubject(subjects?.data?.subjects)
        console.log(subjects?.data?.subjects);

    }

    useEffect(()=>{
        getSubjects()
    },[])
    
  
      

    return <>
    {isLoading?<>
        <div className="flex justify-center items-center ">
        <ClipLoader
        loading={isLoading}
        cssOverride={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
      
        }}
        size={130}
        color="black"
        margin='0 auto'
        
        speedMultiplier={1}
      />
    </div>
    </>:
    <>
     <div className="container mx-auto rounded-md shadow-md p-3">
        <div className="flex justify-between pb-2 px-3">
            <h3 className="text-[#4461F2] font-medium">Quizes</h3>
            <h3 className="text-[#4461F2] font-medium">View All</h3>
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 justify-center">
            {allSubject?.map((subject)=>
            <Link to={`getOneSubject/${subject?._id}`} key={subject?._id} >
            <div key={subject?._id} className="relative p-2 rounded shadow-md">
                <img  src={subject?.icon} alt={subject?.name} />
                <div className="absolute w-[276px] rounded-md text-white font-bold text-center bg-[#1100FF66] p-3 bottom-[20px] left-[38px]">
                {subject?.name}
                </div>
            </div>
            </Link>
        )}
        </div>
    </div>
    </>}
    
   
    </>
}

export default GetSubjects;