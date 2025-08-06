import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";
import Layout from "./pages/layout/Layout";
import DetailProduct from "./pages/detail-product/DetailProduct";
import Wishlist from "./pages/wishlist.jsx/Wishlist";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Shop from "./pages/shop/Shop";
import CategoryItem from "./pages/categoryItem/CategoryItem";
import Blog from "./pages/blog/Blog";
import Checkout from "./pages/checkout/Checkout";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/category/:type" element={<CategoryItem />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
