import Hero from "../components/Hero"
import Categories from "../components/Categories"
import Products from "../components/Products"
import ViewAllProducts from "../ViewAllProducts"

const Homepage = () => {
  return (
    <>
        <Hero />
        <Categories />
        <Products isHome={true}/>
        <ViewAllProducts />
    </>
  )
}

export default Homepage