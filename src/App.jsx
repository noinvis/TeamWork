import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";
import Layout from "./pages/layout/Layout";
import DetailProduct from "./pages/detail-product/DetailProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
