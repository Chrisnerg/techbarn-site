import { FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

const ProductPage = () => {
  return (
    <>
      <div className="container text-indigo-500">
        <Link 
              to='/products'
              className="hover:text-indigo-700 flex items-center">
          <FaArrowLeft className="mx-2"/> Back to Products 
        </Link>
        
      </div>
    </>
  )
}

export default ProductPage