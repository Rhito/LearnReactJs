import { useState } from "react";
import ListProductBody from "../../product/listProduct/body/ListProductBody";
import ListProductHead from "../../product/listProduct/head/ListProductHead";
import styles from "./ListProduct.module.css";

export default function ListProduct() {
  const [cateActive, setCateActive] = useState(null);
  const [productFilter, setProductFilter] = useState("");
  return (
    <div className={styles.listProduct}>
      <ListProductHead
        cateActive={cateActive}
        productFilter={productFilter}
        onCategoryChange={setCateActive}
        onProductFilterChange={setProductFilter}
      />
      <ListProductBody cateActive={cateActive} productFilter={productFilter} />
    </div>
  );
}
