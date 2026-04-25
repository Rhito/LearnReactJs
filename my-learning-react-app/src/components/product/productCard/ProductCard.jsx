import { useContext } from "react";
import Formatter from "../../../shared/formatCurrency/Formatter";
import Button from "../button/Button";
import localStyles from "./ProductCard.module.css";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../../../context/CartContext";
export default function ProductCard({ product }) {
  const { setCart } = useContext(CartContext);
  const addToCart = () => {
    setCart((prev) => {
      const existProd = prev?.find((item) => item.id == product.id);
      if (existProd) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }
      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };
  return (
    <div className={localStyles.productCard}>
      <div className={localStyles.cardBody}>
        <img className={localStyles.cardImg} src={product.image} />
        <div className={localStyles.cardContent}>
          <p className={localStyles.cardName}>{product?.name}</p>
          <p className={localStyles.cardPrice}>{Formatter(product?.price)}</p>
          <p className={localStyles.cardDescription}>{product?.description}</p>
        </div>
      </div>
      <Button
        className={localStyles.cardButton}
        onClick={addToCart}
        prefix={<ShoppingCart size={16} />}
      >
        Thêm vào giỏ hàng
      </Button>
    </div>
  );
}
