import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"

const MainLayoutAdmin = () => {
  return (
    <div className='flex justify-between'>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default MainLayoutAdmin