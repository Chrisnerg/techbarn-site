import { useContext } from "react"
import logo from "../assets/images/logo.png"
import { NavLink } from "react-router-dom"
import { userContext } from "../context/UserContext"
import { RiAccountCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsCart3 } from "react-icons/bs";

const NavBarAdmin = () => {
    const { user } = useContext(userContext);
    const { setUser } = useContext(userContext);
    const navigate = useNavigate();

    const logoutUser = async () => {
        
        try{
            await fetch(`/api/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ active: false })
        });
            setUser(undefined);
            toast.success('Logged Out')
            localStorage.clear();
            navigate('/')
        } catch(error) {
            console.error("Failed during logout", error)
        }
    }
    
  return (
    <div className="bg-indigo-700 h-30 w-full flex justify-between border-b">
        <div className="pl-2 py-4 flex">
            <NavLink to="/dashboard">
                <img
                className="h-10 w-auto"
                src={logo}
                alt="TechBarn logo"
            />
            </NavLink>
            <NavLink to="/dashboard">
                <div className="font-bold text-white pt-2 pl-1">TechBarn</div>
            </NavLink>
        </div>

        <div className="flex py-4 text-white space-x-2">
            <div className="pr-4">
                <div className='text-xl'>
                    {`Hi 👋, Manager ${user.name} `}
                </div>
                
            </div>
            
            <div className="pr-2">
                <NavLink onClick={logoutUser} className='hover:bg-gray-900 rounded-md w-fit h-fit px-2 py-2 text-lg'>
                    Logout
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default NavBarAdmin