//The outlet allows us to render the children of the parent element
//In this case the outlet  as the container that stores the children elements
//And that the children elements that we are rendering are coming from the Oulet element
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import NavBar from "../components/NavBar"

const MainLayoutPage = () => {
  return (
    <>
        <NavBar />
        {/* so here when rendering the outlet we actually rendering the children under the MainLayout */}
        <Outlet />
        <ToastContainer />
    </>
  )
}

export default MainLayoutPage