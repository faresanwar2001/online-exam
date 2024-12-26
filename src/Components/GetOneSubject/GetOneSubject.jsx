import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";



const GetOneSubject = ()=>{

    const [exams ,setExams] = useState(null)
    const [loading, setLoading] = useState(false)
    let { subject} =useParams()
    console.log(subject);
    let token ={
        token: localStorage.getItem('tokenUser'),
    }

    function handleOneExam(id){
        setLoading(true)
        axios.get(`https://exam.elevateegy.com/api/v1/exams?${id}`,{
            headers: token
        },
        {
            Params:subject
        }

        )
        .then((response)=>{
            if(response?.data?.message === 'success'){
                setLoading(false)
                console.log(response?.data?.exams);
                setExams(response?.data?.exams)
            }

            console.log(response);
        }) 
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{
        handleOneExam()
    },[])

    return<>
    {loading?<>
        <div className="flex justify-center items-center ">
        <ClipLoader
        loading={loading}
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
    </>:null}
    <div className="container mx-auto rounded-md shadow-md p-3 mt-5 ">
        {exams?.map((exam)=> <div key={exam?._id} className="flex shadow-sm rounded-md p-3 justify-between my-4 ">
            <div className="icon">
                <div className="img">
                    <img src={exam?.image} alt="" />
                </div>
                <div className="icon-title">
                    <h5 className="font-semibold">{exam?.title} </h5>
                    <p className="text-[#535353] mb-1">{exam?.numberOfQuestions} Questions</p>
                </div>
            </div>
            <div className="start">
                <h5 className="text-[#535353] mb-1">{exam?.duration} Minutes</h5>
                <Link className="bg-[#4461F2] py-[4px] px-[24px] rounded-[10px] text-white" to={''} >Start</Link>
            </div>
        </div>
        )}
       
    </div>
    </>


}
export default GetOneSubject;