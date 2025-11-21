import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProductPage = ({ addProduct }) => {

    const navigate = useNavigate();

    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState(0);
    const [image, setImage] = useState(null);

    const submitForm = (e) => {

        const newProduct = {
            name: productName,
            category: productCategory,
            price: productPrice,
            stock: stock,
            image,
            description
        }

        addProduct(newProduct);
        toast.success('Product Added Successfully')
        return navigate("/dashboard/product-management");
    }

    const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

    return (
        <div className='bg-indigo-100 w-4/5 min-h-screen pb-24 '>
            <div className="flex justify-evenly pt-8"></div>
            <div className='container m-auto max-w-2xl py-24'>
                <div className='px-6 py-8 mb-4 bg-white shadow-lg rounded-md border m-4 md:m-0'>
                    <form onSubmit={submitForm}>
                        <h2 className='text-center font-bold text-2xl'>Add Product</h2>

                        <div className='mb-4'>
                            <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>Product Name</label>
                            <input
                                placeholder='e.g Nvidia RTX 5070'
                                type="text"
                                className='border rounded w-full py-2 px-3'
                                value={productName}
                                onChange={(e) => { setProductName(e.target.value); }}
                                required />
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='category' className='block text-gray-700 font-bold mb-2'>Category</label>
                            <select
                                id='category'
                                name='category'
                                className='border rounded w-full py-2 px-3'
                                value={productCategory}
                                onChange={(e) => setProductCategory(e.target.value)}
                                required>
                                <option value="" disabled selected>
                                    -- Select an option --
                                </option>
                                <option value="Laptop">Laptop</option>
                                <option value="Gaming PC">Gaming PC</option>
                                <option value="Controller">Controller</option>
                                <option value="Accessory">Accessory</option>
                                <option value="component">component</option>
                            </select>
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>Product Price</label>
                            <input
                                placeholder='e.g R0.00'
                                type="text"
                                className='border rounded w-full py-2 px-3'
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                                required />
                        </div>

                        <div className='mb-4'>
                            <p className='py-2 block text-gray-700 font-bold mb-2'>Stock:</p>
                            <input
                                placeholder='e.g 0'
                                type="text"
                                className='border rounded w-full py-2 px-3'
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                required />
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='Description' className='block text-gray-700 font-bold mb-2'>Description</label>
                            <textarea
                                placeholder='e.g This is a special product'
                                name="Description"
                                id="Description"
                                className='border rounded w-full py-2 px-3'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required></textarea>
                        </div>

                        {/* Image Upload */}
                        <div>
                            <div className="flex flex-col items-center">
                                <label
                                    htmlFor="image-upload"
                                    className="w-64 h-44 border-2 border-dashed border-gray-400 rounded-lg 
                                        flex flex-col justify-center items-center cursor-pointer
                                        hover:border-blue-500 transition">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt="preview"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    ) : (
                                        <div className="text-gray-500 flex flex-col items-center">
                                            <svg
                                                className="w-10 h-10 mb-2 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6H16a5 5 0 010 10h-1m-4 4v-8m0 0l-2 2m2-2l2 2"
                                                />
                                            </svg>
                                            <p>Click to upload image</p>
                                        </div>
                                    )}

                                    <input
                                        id="image-upload"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleUpload}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className='text-center w-full '>
                            <button
                                type="submit"
                                className=' mt-8 bg-indigo-400 w-full rounded-md hover:bg-indigo-600 py-1'
                            >Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AddProductPage