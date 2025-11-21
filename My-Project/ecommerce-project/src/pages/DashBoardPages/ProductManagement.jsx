import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const ProductManagement = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

     useEffect( () => {
        const fetchProducts = async () => {
            
            try {
                const res = await fetch('/api/products');
                const data = await res.json();
                setProducts(data);
            } catch(error) {
            console.error("Failed to fetch products", error)
            }
        }
        fetchProducts();
    }, [])

    const productStatusStyles = {
        in_stock: "bg-emerald-200 text-black",
        low_stock: "bg-yellow-200 text-black",
        out_of_stock: "bg-red-100 text-red-700",
    };

    const getProductStatus = (stock) => {
        if (stock <= 0) {
            return "out_of_stock";
        } else if (stock <= 50) {
            return "low_stock";
        } else {
            return "in_stock";
        }
    }

    const HandleAddProduct = () => {
        navigate('/dashboard/product-management/add-product');
    }

    const deleteProduct = () => {
        
    }


    return (
            <div className='bg-gray-200 w-4/5 min-h-screen pb-24 '>
                <div className="flex justify-evenly pt-8">
                    <div className="bg-white rounded-md shadow-lg border-gray-300 border hover:scale-110">
                        <div className="mx-4">
                            <div className="flex justify-between pt-2">
                                <p className="text-xs pb-3">Total Products</p>

                            </div>
                            <p className="text-lg">{products.length}</p>
                            <p className="text-xs pb-2">+12.2% from last month</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-md shadow-lg border-gray-300 border hover:scale-110">
                        <div className="mx-4">
                            <div className="flex justify-between pt-2">
                                <p className="text-xs pb-3">Products Returned</p>
                            </div>
                            <p className="text-lg">17</p>
                            <p className="text-xs pb-2">-0.63% from last month</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-md shadow-lg border-gray-300 border hover:scale-110">
                        <div className="mx-4">
                            <div className="flex justify-between pt-2">
                                <p className="text-xs pb-3">Total Refunds</p>
                            </div>
                            <p className="text-lg">$12,853.12</p>
                            <p className="text-xs pb-2">-0.63% from last month</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-md shadow-lg border-gray-300 border hover:scale-110">
                        <div className="mx-4">
                            <div className="flex justify-between pt-2">
                                <p className="text-xs pb-3">Revenue</p>

                            </div>
                            <p className="text-lg">$45,231.89</p>
                            <p className="text-xs pb-2">+7.1% in last month</p>
                        </div>

                    </div>

                </div>

                {/* Table of products */}
                <div className="flex justify-center pt-8">
                    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h2 className="text-xl font-semibold text-slate-900">Products</h2>
                                <p className="text-sm text-slate-500">Manage your inventory</p>
                            </div>
                            <button
                                onClick={HandleAddProduct}
                                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                            >
                                + Add Product
                            </button>
                        </div>

                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b-2 border-gray-300">
                                    <th className="text-left py-3 px-4">Product ID</th>
                                    <th className="text-left py-3 px-4">Name</th>
                                    <th className="text-left py-3 px-4">Stock</th>
                                    <th className="text-left py-3 px-4">Price</th>
                                    <th className="text-left py-3 px-4">Category</th>
                                    <th className="text-left py-3 px-4">Status</th>
                                    <th className="text-left py-3 px-4">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {products.map((product) => (
                                    <tr
                                        key={product.id}
                                        className="border-b border-gray-200 hover:bg-gray-50 transition"
                                    >
                                        <td className="py-3 px-4 font-medium">{product.id}</td>
                                        <td className="py-3 px-4">{product.name}</td>
                                        <td className="py-3 px-4">{product.stock}</td>
                                        <td className="py-3 px-4">${product.price}</td>
                                        <td className="py-3 px-4">{product.category}</td>

                                        <td className="py-3 px-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${productStatusStyles[getProductStatus(product.stock)]
                                                    }`}
                                            >
                                                {getProductStatus(product.stock).replace("_", " ")}
                                            </span>
                                        </td>

                                        {/* Delete button */}
                                        <td className="py-3 px-8">
                                            <button
                                                onClick={deleteProduct}
                                                className="text-red-500 hover:underline"
                                            >
                                                <MdDelete />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
}

export default ProductManagement