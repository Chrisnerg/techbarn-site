import { createContext, useState, useEffect } from "react"

export const userContext = createContext();

const UserContext = ( {children }) => {
    const [user,setUser] = useState(null);

    //This function is for getting user from localstorage to simulate user session cookies
    useEffect( () => {
      const userLocal = localStorage.getItem("userInfo");

      if(userLocal) {
        try {
          setUser(JSON.parse(userLocal));
        } catch(error) {
          console.error("Failed parse user:", error);
        }
      }
    }, [])
    
  return (
    <userContext.Provider value={{ user,setUser }}>
        {children}
    </userContext.Provider>
  )
}

export default UserContext