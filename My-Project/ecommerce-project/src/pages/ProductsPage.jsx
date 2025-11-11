import Products from "../components/Products";

const ProductsPage = () => {
    const image = "https://xboxdesignlab.xbox.com/media/wysiwyg/1199200_Sync-Slider_767x400_02.jpg";
  return (

    <>
        <div className="pt-2">
        <div className="h-80 scale-90 bg-no-repeat bg-cover bg-center rounded-md mx-2 hover:scale-100 pb-2 border-1 border-black shadow-2xl"
             style={{ backgroundImage: `url(${image})` }}>
            <h2 className="text-center text-5xl  font-bold text-white">Discover Greatness In Quality Products.</h2>
        </div>
        <Products browse="Shop Our Quality Products"  true/>
    </div>
    </>
  )
}

export default ProductsPage