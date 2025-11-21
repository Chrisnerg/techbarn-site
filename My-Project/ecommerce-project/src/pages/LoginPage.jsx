import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { userContext } from "../context/UserContext"

const LoginPage = () => {
    const { setUser } = useContext(userContext);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();

    //Validating if user exists by fetching data from database and comparing to the information entered
    const submitUser = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/users');
            const data = await res.json();
            
            const userExists = data.find(user =>
                user.email === userEmail && user.password === userPassword
            );

            if (userExists) {
                // Update the active status in the backend
                await fetch(`/api/users/${userExists.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ active: true })
                });

                const activeUser = { ...userExists, active: true };
                setUser(activeUser);

                //Saving user to local storage
                localStorage.setItem("userInfo",JSON.stringify(activeUser));
                toast.success(`Welcome ${activeUser.name}`);
                if(activeUser.role == "admin") {
                    console.log(activeUser.role);
                    navigate('/dashboard');
                } else {
                    navigate('/');
                } 
            } else {
                toast.error('Invalid email or password');
            }

        } catch (error) {
            console.error('Error logging in:', error);
            toast.error('An error occurred during login');
        }

    }

    return (
        <div className='bg-indigo-50 h-screen'>
            <div className='container m-auto py-44 max-w-xl'>
                <div className='bg-white shadow-lg border rounded-md px-6 py-8 m-4 md:m-0 mb-4'>
                    <form onSubmit={submitUser}>
                        <h2 className='text-center font-bold text-2xl mb-4'>Login</h2>

                        <div className='mb-4'>
                            <label htmlFor="email" className='block text-gray-700 font-bold mb-2'>Email:</label>
                            <input
                                placeholder='name@gmail.com'
                                type="text"
                                className='border rounded w-full py-2 px-3'
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                required />
                        </div>

                        <div>
                            <label htmlFor="password" className='block text-gray-700 font-bold mb-2'>Password:</label>
                            <input
                                type="password"
                                placeholder='********'
                                className='border rounded w-full py-2 px-3'
                                value={userPassword}
                                onChange={(e) => setUserPassword(e.target.value)}
                                required />
                        </div>

                        <div className='text-center w-full '>
                            <button
                                type="submit"
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