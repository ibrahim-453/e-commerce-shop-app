import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function ProductByCategory() {
  const { categoryName } = useParams();
  const { product, getbycategory, getsingleproduct, dispatch } = useShop();

  useEffect(() => {
    getbycategory(categoryName);
  }, [categoryName]);

  const formatCategoryName = (name) => {
    if (!name) return "";
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-22 sm:py-24 lg:py-26 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">
              Category
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {formatCategoryName(categoryName)}
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our curated collection of{" "}
            {formatCategoryName(categoryName).toLowerCase()} products
          </p>
        </div>
      </div>
      <div className="py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 sm:mb-8">
            <p className="text-xs sm:text-sm text-gray-600">
              {product.length} {product.length === 1 ? "product" : "products"}{" "}
              found
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {product.map((p) => (
              <div
                key={p.id}
                className="group bg-white border-2 border-gray-200 hover:border-slate-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg sm:hover:-translate-y-2 sm:hover:shadow-2xl"
              >
                <div className="relative overflow-hidden bg-gray-50">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-36 sm:h-48 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => dispatch({ type: "Add", payload: p })}
                      className="bg-slate-900 text-white px-3 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-medium transform scale-90 group-hover:scale-100 transition-transform duration-300 hover:bg-gray-800"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
                <div className="p-3 sm:p-6">
                  <h3 className="text-xs sm:text-base font-semibold text-black mb-1 sm:mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                    {p.title}
                  </h3>

                  {p.price && (
                    <p className="text-sm sm:text-xl font-bold text-black mb-2 sm:mb-4">
                      ${p.price}
                    </p>
                  )}
                  {p.rating && (
                    <div className="flex items-center mb-2 sm:mb-4">
                      <div className="flex text-black text-xs sm:text-base">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < Math.floor(p.rating)
                                ? "text-black"
                                : "text-gray-300"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-slate-900 ml-1 sm:ml-2">
                        ({p.rating})
                      </span>
                    </div>
                  )}
                  <div className="space-y-2 sm:space-y-3">
                    <Link
                      to={`/product/${p.id}`}
                      onClick={() => getsingleproduct(p.id)}
                      className="block w-full text-center py-1.5 sm:py-3 px-2 sm:px-4 border border-slate-900 text-black font-medium text-xs sm:text-sm hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => dispatch({ type: "Add", payload: p })}
                      className="w-full py-1.5 sm:py-3 px-2 sm:px-4 bg-slate-900 text-white font-medium text-xs sm:text-sm hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {product.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <div className="text-4xl sm:text-6xl text-gray-300 mb-4">🔍</div>
              <h2 className="text-lg sm:text-2xl font-semibold text-black mb-2">
                No Products Found
              </h2>
              <p className="text-gray-600 text-xs sm:text-base mb-6">
                We couldn't find any products in the "
                {formatCategoryName(categoryName)}" category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductByCategory;
