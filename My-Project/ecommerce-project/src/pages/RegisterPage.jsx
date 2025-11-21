import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = ({ registerUser }) => {

    const navigate = useNavigate();

    const [userName,setUserName] = useState('');
    const [userSurname,setUserSurname] = useState('');
    const [userEmail,setUserEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const submitUser = (e) => {
        e.preventDefault();

        const newUser = {
            name: userName,
            surname: userSurname,
            email: userEmail,
            password,
            role: "user", // Automatically assign new customers as user
            active:false,
            order: [],
            OrderHistory:[]
        }

        registerUser(newUser);
        toast.success("Registered Successfull");
        return navigate('/login');
    }
  return (
    <div className='bg-indigo-50'>
        <div className='conatiner m-auto py-44 max-w-xl'>
            <div className='bg-white border shadow-lg rounded-md px-6 py-8 m-4 md:m-0 mb-4'>
                <form onSubmit={submitUser}>
                    <h2 className='text-center font-bold text-2xl mb-4'>Register</h2>

                    <div className='mb-4'>
                        <label htmlFor="name" className='block text-gray-700 font-bold mb-2'>Name:</label>
                        <input 
                            placeholder='e.g Bob' 
                            type="text" 
                            className='border rounded w-full py-2 px-3'
                            value={userName}
                            onChange={ (e) => setUserName(e.target.value)}
                            required/>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="surname" className='block text-gray-700 font-bold mb-2'>Surname:</label>
                        <input 
                            placeholder='e.g Smith' 
                            type="text" 
                            className='border rounded w-full py-2 px-3'
                            value={userSurname}
                            onChange={ (e) => setUserSurname(e.target.value)}
                            required/>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-gray-700 font-bold mb-2'>Email:</label>
                        <input 
                            placeholder='name@gmail.com' 
                            type="text" 
                            className='border rounded w-full py-2 px-3'
                            value={userEmail}
                            onChange={ (e) => setUserEmail(e.target.value)}
                            required/>
                    </div>

                    <div>
                        <label htmlFor="password" className='block text-gray-700 font-bold mb-2'>Password:</label>
                        <input 
                            type="password" 
                            placeholder='********' 
                            className='border rounded w-full py-2 px-3'
                            value={password}
                            onChange={ (e) => setPassword(e.target.value)}
                            required/>
                    </div>

                    <div className='text-center w-full '>
                        <button
                            type="submit"
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