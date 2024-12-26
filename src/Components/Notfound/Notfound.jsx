import { Link } from "react-router-dom";



const Notfound = ()=>{


    return<>
    <div className="container mx-auto">
        <h1 className="my-5">Notfound Page</h1>
        <Link to={"/"} className="text-blue-600 underline">Go to Home Page</Link>
    </div>
    </>
}
export default Notfound;