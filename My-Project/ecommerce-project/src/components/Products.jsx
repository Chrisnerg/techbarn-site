import { useState, useEffect } from 'react';
import Product from './Product'
import Spinner from './Spinner';

const Products = ({ browse = "Browse Our Products", isHome = false }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = isHome ? "/api/products?_limit=3" : "/api/products";

  useEffect(() => {
    const fetchProdructs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching data from server", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProdructs();
  }, [])

  return (
    <div className="bg-indigo-200 h-full w-full pb-3">
      <div className="py-2">
        <h2 className="text-center text-indigo-700 font-bold text-2xl">{browse}</h2>
      </div>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
         </div>
        )}
    </div>
  )
}

export default Products