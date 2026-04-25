import FormAddNew from "../components/layout/FormAddNew/FormAddNew";
import ListProduct from "../components/layout/listProduct/ListProduct";
import ShoppingCart from "../components/layout/shoppingCart/ShoppingCart";
import TotalStat from "../components/layout/totalStat/TotalStat";
import { CartProvider } from "../context/CartProvider";
import { ProductProvider } from "../context/ProductProvider";
import styles from "./ProductsManagement.module.css";
export default function ProductsManagement() {
  return (
    <CartProvider>
      <ProductProvider>
        <div className={styles.productsManagement}>
          <TotalStat />
          <div className={styles.productsManagementBody}>
            <ListProduct />
            <ShoppingCart />
          </div>
          <FormAddNew />
        </div>
      </ProductProvider>
    </CartProvider>
  );
}
