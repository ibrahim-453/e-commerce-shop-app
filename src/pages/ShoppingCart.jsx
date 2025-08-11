import { useShop } from '../context/ShopContext';
import CartProduct from '../components/CartProduct';
import { totalprice, totalquantity } from '../context/CartReducer';

function ShoppingCart() {
  const { cart } = useShop();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-black">Your Cart</h1>

      {cart.length > 0 ? (
        <>

          <div className="hidden md:grid grid-cols-12 border-b pb-2 text-sm font-medium text-gray-500">
            <div className="col-span-6">PRODUCT</div>
            <div className="col-span-3 text-center">QUANTITY</div>
            <div className="col-span-3 text-right">TOTAL</div>
          </div>

          <div className="divide-y divide-gray-300">
            {cart.map((item, index) => (
              <CartProduct key={index} cartitem={item} />
            ))}
          </div>
          <div className="flex flex-col items-end mt-8 gap-4">
             <div className="text-lg text-black">
              Total Quantity:{' '}
              <span className="font-semibold">
                {totalquantity(cart)} Items
              </span>
            </div>
            <div className="text-lg text-black">
              Estimated Total:{' '}
              <span className="font-semibold">
                ${totalprice(cart).toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Taxes, discounts, and shipping calculated at checkout.
            </p>
            <button className="bg-slate-900 text-white px-6 py-3 font-medium rounded hover:bg-gray-800 transition">
              Check Out
            </button>
          </div>
        </>
      ) : (
        <h2 className="w-full h-screen text-center text-xl mt-10 text-gray-600">
          Your cart is empty 🛒
        </h2>
      )}
    </div>
  );
}

export default ShoppingCart;
