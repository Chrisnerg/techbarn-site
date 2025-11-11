import { Link } from "react-router-dom"

const RegisterPage = () => {
  return (
    <div className='bg-indigo-50'>
        <div className='conatiner m-auto py-44 max-w-xl'>
            <div className='bg-white border shadow-lg rounded-md px-6 py-8 m-4 md:m-0 mb-4'>
                <form>
                    <h2 className='text-center font-bold text-2xl mb-4'>Register</h2>

                    <div className='mb-4'>
                        <label htmlFor="name" className='block text-gray-700 font-bold mb-2'>Name:</label>
                        <input placeholder='e.g Bob' type="text" className='border rounded w-full py-2 px-3'/>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="surname" className='block text-gray-700 font-bold mb-2'>Surname:</label>
                        <input placeholder='e.g Smith' type="text" className='border rounded w-full py-2 px-3'/>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-gray-700 font-bold mb-2'>Email:</label>
                        <input placeholder='name@gmail.com' type="text" className='border rounded w-full py-2 px-3'/>
                    </div>

                    <div>
                        <label htmlFor="password" className='block text-gray-700 font-bold mb-2'>Password:</label>
                        <input placeholder='********' type="text" className='border rounded w-full py-2 px-3'/>
                    </div>

                    <div className='text-center w-full '>
                        <button
                            className=' mt-8 bg-indigo-400 w-full rounded-md hover:bg-indigo-600 py-1'
                            >Register</button>
                    </div>

                    <p className="text-center pt-4">Already have an account? <Link to='/login' className="text-indigo-500 hover:text-indigo-700">
                        Login
                    </Link></p>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default RegisterPage