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
import ProductPage, {productLoader} from "./pages/ProductPage"
import AddProductPage from "./pages/AddProductPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import AboutPage from "./pages/AboutPage"

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path={`/product/:id`} element= {<ProductPage />}  loader={productLoader}/>
      <Route path="/add-product" element={<AddProductPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* the "*" in path="*" means undefined pages. So for every page that is undefined we will render the NotFoundPage */}
      <Route path="*" element={ <NotFoundPage />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App