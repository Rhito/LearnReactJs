import Input from "../components/product/input/Input";
import Button from "../components/product/button/Button";
import { Link } from "lucide-react";
import TotalStat from "../components/layout/totalStat/TotalStat";
export default function ShowComponent() {
  return (
    <div>
      <TotalStat />
      <hr />
      <label>input number</label>
      <Input type="number" suffix="đ" />
      <hr />
      <Input prefix={<Link size={16} />} placeholder="Nhập mô tả sản phẩm..." />
      <hr />
      <Button
        style={{ color: "red", backgroundColor: "#fff", borderColor: "red" }}
        prefix={"+123"}
      ></Button>
      <hr />
      <Button
        style={{
          color: "#fff",
          backgroundColor: "#3a7ce0",
          borderRadius: "16px",
          border: "none",
        }}
      >
        Tất cả
      </Button>
    </div>
  );
}
