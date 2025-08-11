import { useShop } from "../context/ShopContext";
import { Trash2, Plus, Minus } from "lucide-react";

function CartProduct({ cartitem }) {
  const { dispatch } = useShop();

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 items-center py-4 gap-4 border-b border-gray-300">
      <div className="flex items-center col-span-6">
        <img
          src={cartitem.thumbnail}
          alt={cartitem.title}
          className="w-24 h-24 object-cover border border-gray-400 rounded"
        />
        <div className="ml-4">
          <h2 className="font-medium text-black">{cartitem.title}</h2>
          <p className="text-gray-500 text-sm">${cartitem.price}</p>
        </div>
      </div>
      <div className="col-span-3 flex justify-center items-center">
        <div className="flex border border-gray-400 rounded overflow-hidden">
          <button
            onClick={() => dispatch({ type: "Decrease", payload: cartitem })}
            className="px-3 py-1 hover:bg-slate-900 hover:text-white transition"
          >
            <Minus size={16} />
          </button>
          <span className="px-4 py-1 text-black">{cartitem.quantity}</span>
          <button
            onClick={() => dispatch({ type: "Increase", payload: cartitem })}
            className="px-3 py-1 hover:bg-slate-900 hover:text-white transition"
          >
            <Plus size={16} />
          </button>
        </div>
        <button
          onClick={() => dispatch({ type: "Remove", id: cartitem.id })}
          className="ml-4 text-gray-500 hover:text-red-600 transition"
        >
          <Trash2 size={20} />
        </button>
      </div>

      <div className="col-span-3 text-right font-medium text-black">
        ${ (cartitem.price * cartitem.quantity).toFixed(2) }
      </div>
    </div>
  );
}

export default CartProduct;
