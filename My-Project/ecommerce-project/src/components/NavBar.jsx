import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const NavBar = () => {

    const linkClass = ( {isActive} ) => {
      return  isActive ? "bg-black rounded-md w-fit h-fit px-2 py-2" : "hover:bg-gray-900 rounded-md w-fit h-fit px-2 py-2"
    }
    
  return (
    <div className="bg-indigo-700 h-30 w-full flex justify-between border-b">
        <div className="pl-2 py-1 flex">
            <NavLink to="/">
                <img
                className="h-10 w-auto"
                src={logo}
                alt="TechBarn logo"
            />
            </NavLink>
            <NavLink to="/">
                <div className="font-bold text-white pt-2 pl-1">TechBarn</div>
            </NavLink>
        </div>
        <div className="flex py-2 text-white space-x-2">
            <div>
                <NavLink to="/login" className={linkClass}>
                    Login
                </NavLink>
                
            </div>
            <div>
                <NavLink to="/register" className={linkClass}>
                    Register
                </NavLink>
            </div>
            <div className="pr-2">
                <NavLink to="/about" className={linkClass}>
                    About
                </NavLink>
                
            </div>
        </div>
    </div>
  )
}

export default NavBar