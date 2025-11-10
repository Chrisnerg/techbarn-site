import { Link } from "react-router-dom"

const Categories = () => {
  return (
    <div className="bg-gray-300 shadow-md h-10 rounded-md mx-1 border-b mb-2">
        <div className="flex justify-around h-fit text-center pt-2">
            <div className=" text-center  hover:border-2 border-black rounded-sm w-fit h-fit px-1 py-1">
                <Link to='/components'>
                    All Components
                </Link>
            </div>
            <div className="hover:border-2 border-black rounded-sm w-fit h-fit px-1 py-1">
                <Link to='/laptops'>
                    Laptops
                </Link>
            </div>
            <div className="hover:border-2 border-black rounded-sm w-fit h-fit px-1 py-1">
                <Link to='/newarrivals'>
                    New Arrivals
                </Link>
            </div>
            <div className="hover:border-2 border-black rounded-sm w-fit h-fit px-1 py-1">
                <Link to='gamingaccesories'>
                    Gaming Accesories
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Categories