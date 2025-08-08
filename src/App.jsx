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
const Search = lazy(() => import("./pages/search/Search"));


import { Toaster } from "react-hot-toast";
import Logo from "./components/logo/Logo";

const App = () => {
  return (
    <>
      <Suspense fallback={<Logo />}>
      {<Toaster position="top-center" />}
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
              {
                path: "/search",
                element: <Search />,
              },
            ],
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ])}
      </Suspense>
    </>
  );
};

export default App;
