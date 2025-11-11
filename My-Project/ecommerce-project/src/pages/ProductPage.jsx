import { FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useParams, useLoaderData } from "react-router-dom"

const ProductPage = () => {
  const { id } = useParams();

  /* useLoaderData() returns data from the nearest/closest route loader */
  const product = useLoaderData();
  return (
    <>

      <Link
        to='/products'
        className="hover:text-indigo-900 flex items-center pt-4">
        <FaArrowLeft className="mx-2 text-indigo-500 hover:text-indigo-700" />
         <p className="hover:text-indigo-700 text-indigo-500 text-xl">Back to Products</p>
      </Link>

      <div className="w-full min-h-screen bg-indigo-50 flex gap-6 p-6 mt-6">
        <div className="flex-1 space-y-6 w-1/5">
          <div className="bg-white ml-6 rounded-md shadow-lg p-4 w-4/5">
            <img
              className="max-w-sm w-full h-auto mx-auto pl-3 pt-6 object-contain rounded-lg"
              src={product.image}
            />

            <div className="flex">
              <h1 className="text-xl pt-3 pl-3 text-indigo-600 ">{product.name}</h1>
              <Link 
                    to='/login'>
              <h2 className="bg-red-500 w-fit rounded-md ml-72 pt-1 px-1 hover:bg-red-900">Add to Cart</h2>
              </Link>
            </div>
            
          </div>

          <div className="mt-6 ml-6 bg-white rounded-md shadow-lg p-4 w-5/5">
            <h2 className="text-xl pt-2 pl-3 text-indigo-600">Product Description</h2>
            <p className="pl-3">{product.description}</p>
            <p className="pt-2 pl-3 text-indigo-600 text-xl">{product.price}</p>
          </div>

        </div>

        <div className="p-4 w-1/5 self-start">
          <div className="bg-white rounded-md shadow-lg p-4">
            <p className="font-bold">Company Info</p>
            <h2 className="text-xl pt-4">TechBarn</h2>
            <p>At TechBarn, we are committed to providing you with high-quality products and
              a seamless shopping experience, upholding our promise of being "Rooted in Quality."
              We understand that sometimes a product may not meet your exact needs. Therefore, we offer a
              straightforward return and exchange policy...</p>
          </div>

          <div className="bg-white rounded-md shadow-lg p-4 mt-10">
            <p className="text-xl">Contact Email:</p>
            <p className="bg-indigo-300">techbarn@shop.co.za</p>
            <p>Contact Phone</p>
            <p className="bg-indigo-300">555-555-555</p>
          </div>
        </div>


      </div>
    </>
  )
}

const productLoader = async ({ params }) => {
  const res = await fetch(`/api/products/${params.id}`);
  const data = await res.json();
  return data;
}

export { ProductPage as default, productLoader }