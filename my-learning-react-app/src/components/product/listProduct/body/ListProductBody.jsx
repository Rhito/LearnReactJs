import { useContext } from "react";
import ProductCard from "../../productCard/ProductCard";
import localStyles from "./ListProductBody.module.css";
import { ProductContext } from "../../../../context/ProductContext";
export default function ListProductBody({ cateActive, productFilter }) {
  const { products } = useContext(ProductContext);
  const filterdProduct = products.filter((prod) => {
    const matchCate = !cateActive || prod.category === cateActive;
    const matchProductName = prod.name.includes(productFilter.trim());
    return matchCate && matchProductName;
  });
  return (
    <div className={localStyles.listProductBody}>
      {filterdProduct?.map((prod) => {
        return <ProductCard key={prod.id} product={prod} />;
      })}
    </div>
  );
}
