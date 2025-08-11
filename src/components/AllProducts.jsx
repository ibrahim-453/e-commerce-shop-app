import { useShop } from '../context/ShopContext'
import { Link } from 'react-router-dom'

function AllProducts() {
    const { allproducts, getsingleproduct, dispatch } = useShop()
    
    return (
        <div className="min-h-screen bg-white py-6 sm:py-8 px-3 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tight">
                    Products
                </h1>
                <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-30 bg-black mx-auto"></div>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
                    {allproducts.map((item, index) => (
                        <div 
                            key={index} 
                            className="group bg-white border-2 border-gray-200 hover:border-slate-900 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl"
                        >
                            <div className="relative overflow-hidden bg-gray-50">
                                <img 
                                    src={item.thumbnail} 
                                    alt={item.title} 
                                    className="w-full h-40 sm:h-56 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-3 sm:p-6">
                                <h3 className="text-sm sm:text-lg font-semibold text-black mb-2 sm:mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                                    {item.title}
                                </h3>

                                {item.price && (
                                    <p className="text-base sm:text-2xl font-bold text-black mb-3 sm:mb-4">
                                        ${item.price}
                                    </p>
                                )}
                                <div className="space-y-2 sm:space-y-3">
                                    <Link 
                                        to={`/product/${item.id}`} 
                                        onClick={() => getsingleproduct(item.id)}
                                        className="block w-full text-center py-2 sm:py-3 px-2 sm:px-4 border-2 border-slate-900 text-black text-sm sm:text-base font-medium hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
                                    >
                                        View Details
                                    </Link>
                                    
                                    <button 
                                        onClick={() => dispatch({type: "Add", payload: item})}
                                        className="w-full py-2 sm:py-3 px-2 sm:px-4 bg-slate-900 text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {allproducts.length === 0 && (
                    <div className="text-center py-12 sm:py-16">
                        <div className="text-4xl sm:text-6xl text-gray-300 mb-4">📦</div>
                        <h2 className="text-lg sm:text-2xl font-semibold text-black mb-2">
                            No Products Found
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Check back later for new arrivals.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AllProducts
