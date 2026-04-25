import StatCard from "../../product/statCard/StatCard";
import localStyle from "./TotalStat.module.css";
import purseImg from "./../../../asset/purse.png";
import cartImg from "./../../../asset/cart.png";
import packageImg from "./../../../asset/package.png";
import walletImg from "./../../../asset/wallet.png";
export default function TotalStat() {
  const statList = [
    {
      id: 1,
      src: purseImg,
      title: "Tổng sản phẩm",
      totalAmount: 0,
      description: "Sản phẩm hệ thống",
    },
    {
      id: 2,
      src: cartImg,
      title: "Sản phẩm trong giỏ",
      totalAmount: 0,
      description: "Sản phẩm đã chọn",
    },
    {
      id: 3,
      src: packageImg,
      title: "Tổng số lượng",
      totalAmount: 0,
      description: "Tổng số lượng sản phẩm",
    },
    {
      id: 4,
      src: walletImg,
      title: "Tổng tiền",
      totalAmount: 0,
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
