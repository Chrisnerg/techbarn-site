import { Link } from "react-router-dom"

const ViewAllProducts = () => {
  return (
    <div className="py-3 mx-16 text-center">
        <div className="bg-black text-centre py-2 rounded-lg hover:bg-gray-700">
            <Link  className="text-white inline-block"
                to="/products">
                View All Products
            </Link>
        </div>
    </div>
  )
}

export default ViewAllProducts