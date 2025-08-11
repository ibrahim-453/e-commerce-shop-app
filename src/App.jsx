import { useEffect, useState } from "react";
import { HashRouter, Route , Routes } from "react-router-dom";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { ShopProvider } from "./context/ShopContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductByCategory from "./pages/ProductByCategory";
import ShoppingCart from "./pages/ShoppingCart";
import SingleProduct from "./pages/SinlgeProduct"
import About from "./pages/About";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 3,
      onComplete: () => {
        setTimeout(() => setIsLoading(false), 500);
      },
    });

    return () => controls.stop();
  }, []);

  return (
    <ShopProvider>
      <HashRouter>
        {isLoading && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3.2, duration: 0.5 }}
          >
            <motion.span className="text-[100px] text-white font-bold">
              {rounded}
            </motion.span>
          </motion.div>
        )}
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/category/:categoryName" element={<ProductByCategory />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
            <Footer />
          </motion.div>
        )}
      </HashRouter>
    </ShopProvider>
  );
}

export default App;
