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
import ProductPage from "./pages/ProductPage"

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/products" element={<ProductsPage />} />

      {/* the "*" in path="*" means undefined pages. So for every page that is undefined we will render the NotFoundPage */}
      <Route path="*" element={ <NotFoundPage />} />
      <Route path={`/product/:id`} element= {<ProductPage />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App