import NavBarLoggedOut from "./NavBarLoggedOut"
import NavBarUser from "./NavBarUser"
import NavBarAdmin from "./NavBarAdmin"
import { useContext } from "react"
import { userContext } from "../context/UserContext"

const NavBar = () => {
    const { user } = useContext(userContext);

    const renderLogin = () => {
        // Check if user exists before accessing its properties
        if(!user) {
            return <NavBarLoggedOut />;
        }

        if(user.role === 'user' && user.active === true)
        {
            return <NavBarUser />;
        } else if(user.role === 'admin' && user.active === true)
        {
            return <NavBarAdmin />;
        } else {
            return <NavBarLoggedOut />;
        }
    }
  return (
    <div className=''>
        {renderLogin()}
    </div>
  )
}

export default NavBar
