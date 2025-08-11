import { useParams } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { useEffect } from 'react';

function SingleProduct() {
  const { id } = useParams();
  const { singleproduct, getsingleproduct, dispatch } = useShop();

  useEffect(() => {
    getsingleproduct(id);
  }, [id]);

  return (
    <div className="w-full py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="flex justify-center flex-1">
          <img
            src={singleproduct.thumbnail}
            alt={singleproduct.title}
            className="w-100 h-100 border-2 border-slate-900 rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-bold text-black ">
            {singleproduct.title}
          </h1>
          <p className="text-black text-lg">
            {singleproduct.description}
          </p>
          <p className="text-2xl font-semibold text-black">
            ${singleproduct.price}
          </p>

          <button
            onClick={() => dispatch({ type: 'Add', payload: singleproduct })}
            className="cursor-pointer w-full px-6 py-3 bg-slate-900 text-white text-lg rounded-lg shadow-md hover:bg-gray-700 transition-all"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

