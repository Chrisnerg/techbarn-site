import { Link } from "react-router-dom"
import { ImCross } from "react-icons/im"

const NotFoundPage = () => {
  return (
    <div>
        
        <div className="flex justify-center pt-16">
            <h2 className="text-center text-2xl px-2">Page Not Found </h2> <ImCross className="text-2xl mt-1 text-red-600 rounded-md"/>
        </div>

        <div className="text-center ">
            <Link to="/" >
            <button className="bg-indigo-500  rounded-md px-2 hover:border-2  hover:border-black">
                Home
            </button>
        </Link>
        </div>
        
    </div>
  )
}

export default NotFoundPage