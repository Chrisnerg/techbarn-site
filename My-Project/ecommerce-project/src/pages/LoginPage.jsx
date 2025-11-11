import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <div className='bg-indigo-50'>
        <div className='conatiner m-auto py-44 max-w-xl'>
            <div className='bg-white shadow-lg border rounded-md px-6 py-8 m-4 md:m-0 mb-4'>
                <form>
                    <h2 className='text-center font-bold text-2xl mb-4'>Login</h2>

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
                            >Login</button>
                    </div>

                    <p className="text-center pt-4">Don't have an account? <Link to='/register' className="text-indigo-500 hover:text-indigo-700">
                        Register
                    </Link></p>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default LoginPage