import logo from "../assets/images/logo.png"

const NavBar = () => {
  return (
    <div className="bg-indigo-700 h-30 w-full flex justify-between border-b">
        <div className="pl-2">
            <a href="#">
                <img
                className="h-10 w-auto"
                src={logo}
                alt="TechBarn logo"
            />
            </a>
            
        </div>
        <div className="flex py-2 text-white space-x-2">
            <div className="bg-black rounded-md w-fit h-fit px-1">
                <a href="#">
                    Login
                </a>
                
            </div>
            <div className="hover:bg-black rounded-md w-fit h-fit px-1">
                <a href="#">
                    Register
                </a>
            </div>
            <div className="pr-2 hover:bg-black rounded-md w-fit h-fit px-1">
                <a href='#'>
                    About
                </a>
                
            </div>
        </div>
    </div>
  )
}

export default NavBar