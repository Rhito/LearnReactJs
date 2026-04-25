import StatCard from "../../product/statCard/StatCard";
import localStyle from "./TotalStat.module.css";
import purseImg from "./../../../asset/purse.png";
import cartImg from "./../../../asset/cart.png";
import packageImg from "./../../../asset/package.png";
import walletImg from "./../../../asset/wallet.png";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
import { CartContext } from "../../../context/CartContext";

export default function TotalStat() {
  const { products } = useContext(ProductContext);

  const { cart, totalQuantity, totalPay } = useContext(CartContext);

  const statList = [
    {
      id: 1,
      src: purseImg,
      title: "Tổng sản phẩm",
      totalAmount: products.length,
      description: "Sản phẩm hệ thống",
    },
    {
      id: 2,
      src: cartImg,
      title: "Sản phẩm trong giỏ",
      totalAmount: cart.length,
      description: "Sản phẩm đã chọn",
    },
    {
      id: 3,
      src: packageImg,
      title: "Tổng số lượng",
      totalAmount: totalQuantity,
      description: "Tổng số lượng sản phẩm",
    },
    {
      id: 4,
      src: walletImg,
      title: "Tổng tiền",
      totalAmount: totalPay,
      description: "Tổng giá trị giỏ hàng",
    },
  ];
  return (
    <div className={localStyle.totalStat}>
      {statList.map((item) => {
        return <StatCard key={item.id} stats={item} />;
      })}
    </div>
  );
}
