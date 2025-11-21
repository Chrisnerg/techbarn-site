import Order from "../components/Order"
import { useContext } from "react"
import { userContext } from "../context/UserContext"
import { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner"

const CartPage = () => {
    const { user } = useContext(userContext);
    const { setUser } = useContext(userContext);
    const [orderProducts, setOrderProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [cartStatus,setCartStatus] = useState(false);

    useEffect(() => {
        if (!user?.order) return;

        const userOrder = user.order;

        if(userOrder.length === 0) {
            setCartStatus(true);
            setLoading(false);
            return;
        }

        const fetchProducts = async () => {

            try {
                const res = await fetch('/api/products')
                const data = await res.json();

                const matchedProducts = data.filter(product =>
                    user.order.includes(product.id)
                );

                setOrderProducts(matchedProducts);
                setCartStatus(matchedProducts.length === 0);
            } catch (error) {
                console.error("Error fetching data", error);
                toast.error("Failed to load");
            } finally {
                setLoading(false);
            }
        }
        
        fetchProducts();
    }, [user]);

    const removeItem = async (productId) => {

        const updatedOrders = user.order.filter(id => id !== productId);

        const res = await fetch(`/api/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ order: updatedOrders })
        })

        setUser({ ...user, order: updatedOrders });
        toast.success("Item Removed");

    }

    return (
        <div className='bg-indigo-50'>
            <div className='border mx-auto py-12'>
                {loading ? (
                    <Spinner loading={loading}/>
                ) : (
                        orderProducts.map(product =>
                    <Order
                        key={product.id}
                        productId={product.id}
                        productName={product.name}
                        productPrice={product.price}
                        productImage={product.image}
                        onRemove={removeItem} />
                )
                )}
                

                <div className="text-center mb-4">
                    <button
                        disabled={cartStatus}
                        className="w-1/2 bg-indigo-400 rounded-md shadow-lg text-lg p-2 hover:bg-indigo-600">
                        CheckOut
                    </button>
                </div>

                <div className="text-center">
                    <button
                        onClick={() => navigate('/products')}
                        className="w-1/2 bg-indigo-400 rounded-md shadow-lg text-lg p-2 hover:bg-indigo-600">
                        Continue Shopping
                    </button>
                </div>

            </div>


        </div>
    )
}

export default CartPage