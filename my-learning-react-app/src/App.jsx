import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/practice/pages/Home";
import NotFound from "./components/practice/pages/NotFound";
import ShowComponent from "./page/ShowComponent";
import ProductsManagement from "./page/ProductsManagement";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/show-component" element={<ShowComponent />} />
          <Route path="/products-management" element={<ProductsManagement />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
