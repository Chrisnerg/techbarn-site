import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { userContext } from "../context/UserContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    const { user } = useContext(userContext);
    let name = '';

    const userName = () => {
        if (user) {
            return name = user.name;
        }
    }

    const linkStyle = ({ isActive }) => {
    return isActive
        ? "block w-fill border-l-4 rounded-md border-indigo-500 shadow-lg pl-2 py-7 bg-indigo-100 ml-5 mb-3 scale-110"
        : "block w-full border-l-4 rounded-md border-indigo-500 bg-white shadow-md pl-2 py-7 hover:bg-indigo-50 ml-1 mb-2 mr-4 scale-95";
};

    return (
        <>
            <div className='bg-gray-50 w-1/5 max-h-screen min-h-screen pb-24 shadow-xl border border-gray-300 pr-4'>

                <div className="flex justify-center  pt-4 mb-1">
                    <FaRegCircleUser className="text-4xl" />
                </div>

                <div className="text-center pb-4">  {name ? userName() : 'admin'} </div>
                <div>
                    <NavLink to="/dashboard/OverView" className={linkStyle}>
                        Overview
                    </NavLink>
                </div>

                {/* Use NavLink for these too! */}
                <NavLink to="/dashboard/user-management" className={linkStyle}> {/* Add appropriate paths */}
                    User management
                </NavLink>

                <NavLink to="/dashboard/product-management" className={linkStyle}> {/* Add appropriate paths */}
                    Product management
                </NavLink>

                <NavLink to="/dashboard/Reports" className={linkStyle}> {/* Add appropriate paths */}
                    Reports
                </NavLink>

                <NavLink to="/dashboard/Notifications" className={linkStyle}> {/* Add appropriate paths */}
                    Notifications
                </NavLink>

                <NavLink to="/dashboard/Settings" className={linkStyle}> {/* Add appropriate paths */}
                    Settings
                </NavLink>
            </div>
        </>
    )
}

export default SideBar