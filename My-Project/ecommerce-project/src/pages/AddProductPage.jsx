import React from 'react'

const AddProductPage = () => {

    const submitForm = (e) => {

    }

    return (
        <div className='bg-indigo-50'>
            <div className='container m-auto max-w-2xl py-24'>
                <div className='px-6 py-8 mb-4 bg-white shadow-lg rounded-md border m-4 md:m-0'>
                    <form onSubmit={submitForm}>
                        <h2 className='text-center font-bold text-2xl'>Add Product</h2>

                        <div className='mb-4'>
                            <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>Product Name</label>
                            <input placeholder='e.g Nvidia RTX 5070' type="text" className='border rounded w-full py-2 px-3'/>
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='category' className='block text-gray-700 font-bold mb-2'>Category</label>
                            <select
                                id='category'
                                name='category'
                                className='border rounded w-full py-2 px-3'
                                required>
                                <option value="Laptop">Laptop</option>
                                <option value="Gaming PC">Gaming PC</option>
                                <option value="Controller">Controller</option>
                                <option value="Accessory">Accessory</option>
                                <option value="component">component</option>
                            </select>
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>Product Price</label>
                            <input placeholder='e.g R0.00' type="text" className='border rounded w-full py-2 px-3'/>
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='Description' className='block text-gray-700 font-bold mb-2'>Description</label>
                            <textarea placeholder='e.g This is a special product' name="Description" id="Description" className='border rounded w-full py-2 px-3'></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProductPage