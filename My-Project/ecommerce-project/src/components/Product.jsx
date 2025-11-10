//Link link element actually behaves like the  <a> tag
/* The key takeaway from the Link and <a> tag:
    *The <a> tag reloades/refreshes a page every time we render the page and this is slow when internet access is low
    *The <Link> tag is faster as it does not reload the page thus making navigating between pages faster than the <a>
*/  
import { Link } from "react-router-dom"
import { MdAddShoppingCart } from "react-icons/md"

const Product = ({ product }) => {

    const isLoggedin = false; 
    const url = `/product/${product.id}`
    return (
        <div className="bg-white rounded-xl shadow-lg relative w-4/5 ml-8 mb-5  hover:border-2 border-black">
            <div className="p-4 flex flex-col h-full">
                <div className="mb-6">
                    <div className="text-center h-20">
                        <Link
                            to={url}
                            className=""
                        >
                            <img
                                className="h-20 w-auto bg-transparent inline-block mx-auto"
                                src={product.image}
                            />
                        </Link>
                    </div>

                    <Link to={url}>
                        <h3 className="text-black-500 mb-2 border-b-2 border-gray-500">
                            {product.name}.
                        </h3>
                    </Link>

                    <div className="flex justify-between items-center mt-auto">
                        <span className="text-indigo-700 font-medium">R{product.price}</span>

                        <Link
                            to={url}>
                            <h3 className="bg-black rounded-md text-white py-1 px-6 inline-block hover:bg-gray-600">
                                <Link 
                                    to= {isLoggedin ? "/cart" : "/login"}>
                                    <MdAddShoppingCart className="text-xl"/>
                                </Link>
                            </h3>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product