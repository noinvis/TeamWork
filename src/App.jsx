
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
const NotFound = lazy(() => import("./pages/not-found/NotFound"));
const Layout = lazy(() => import("./pages/layout/Layout"));
const DetailProduct = lazy(() =>
  import("./pages/detail-product/DetailProduct")
);
const Wishlist = lazy(() => import("./pages/wishlist.jsx/Wishlist"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const CategoryItem = lazy(() => import("./pages/categoryItem/CategoryItem"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Home = lazy(() => import("./pages/home/Home"));
// ---------
// import NotFound from "./pages/not-found/NotFound";
// import Layout from "./pages/layout/Layout";
// import DetailProduct from "./pages/detail-product/DetailProduct";
// import Wishlist from "./pages/wishlist.jsx/Wishlist";
// import Cart from "./pages/cart/Cart";
// import Contact from "./pages/contact/Contact";
// import Shop from "./pages/shop/Shop";
// import CategoryItem from "./pages/categoryItem/CategoryItem";
// import Blog from "./pages/blog/Blog";
// import Checkout from "./pages/checkout/Checkout";
import { Toaster } from "react-hot-toast";
import Logo from "./components/logo/Logo";


const App = () => {
  return (
    // <Toaster position="top-center" />
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index={true} element={<Home />} />
    //     <Route path="/product/:id" element={<DetailProduct />} />
    //     <Route path="/wishlist" element={<Wishlist />} />
    //     <Route path="/cart" element={<Cart />} />
    //     <Route path="/shop" element={<Shop />} />
    //     <Route path="/blog" element={<Blog />} />
    //     <Route path="/checkout" element={<Checkout />} />
    //     <Route path="/products/category/:type" element={<CategoryItem />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Route>
    //   <Route path="*" element={<NotFound />} />
    // </Routes>
    <Suspense fallback={<Logo/>}>
      <Toaster position="top-center" />
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "/product/:id",
              element: <DetailProduct />,
            },
            {
              path: "/wishlist",
              element: <Wishlist />,
            },
            {
              path: "/cart",
              element: <Cart />,
            },
            {
              path: "/shop",
              element: <Shop />,
            },
            {
              path: "/blog",
              element: <Blog />,
            },
            {
              path: "/checkout",
              element: <Checkout />,
            },
            {
              path: "/products/category/:type",
              element: <CategoryItem />,
            },
            {
              path: "/contact",
              element: <Contact />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ])}
    </Suspense>
  );
};

export default App;
