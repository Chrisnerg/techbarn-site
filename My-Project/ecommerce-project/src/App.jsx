//Main App page
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Homepage from "./pages/Homepage"
import ProductsPage from "./pages/ProductsPage"
import NotFoundPage from "./pages/NotFoundPage"
import ProductPage, { productLoader } from "./pages/ProductPage"
import AddProductPage from "./pages/AddProductPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import AboutPage from "./pages/AboutPage"
import CartPage from "./pages/CartPage"
import DashboardPage from "./pages/DashboardPage"
import OverView from "./pages/DashBoardPages/OverView"
import MainLayoutAdmin from "./layouts/MainLayoutAdmin"
import UserManagement from "./pages/DashBoardPages/UserManagement"
import ProductManagement from "./pages/DashBoardPages/ProductManagement"

const App = () => {

  const addProduct = async (newProduct) => {

    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Typed': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    return;
  }

  const registerUser = async (newUser) => {

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Typed': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path={`/product/:id`} element={<ProductPage />} loader={productLoader} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage registerUser={registerUser}/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/dashboard" element={<MainLayoutAdmin />}>
          <Route path="/dashboard/home" element={<DashboardPage />} /> 
          <Route path="/dashboard/OverView" element={<OverView />} />
          <Route path="/dashboard/user-management" element={<UserManagement />} />
          <Route path="/dashboard/product-management" element={<ProductManagement />} />
          <Route path="/dashboard/product-management/add-product" element={<AddProductPage addProduct={addProduct}/>} />
        </Route>
        
        {/* the "*" in path="*" means undefined pages. So for every page that is undefined we will render the NotFoundPage */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App