import { Search } from "lucide-react";
import Button from "../../button/Button";
import Input from "../../input/Input";
import localStyles from "./ListProductHead.module.css";
import { CATEGORY_LIST } from "./../../../../shared/constants/Category";
export default function ListProductHead({
  cateActive,
  onCategoryChange,
  productFilter,
  onProductFilterChange,
}) {
  return (
    <div className={localStyles.listProductHead}>
      <div className={localStyles.headerlist}>
        <h2 className={localStyles.title}>Danh sách sản phẩm</h2>
        <Input
          className={localStyles.inputFilter}
          value={productFilter}
          onChange={(e) => onProductFilterChange(e.target.value)}
          placeholder="Tìm kiếm sản phẩm..."
          prefix={<Search size={18} />}
        />
      </div>
      <nav className={localStyles.navList}>
        {CATEGORY_LIST?.map((item) => {
          const isActive = cateActive === item.id;
          return (
            <Button
              key={item.id}
              onClick={() => onCategoryChange(item.id)}
              className={`${localStyles.navButton} ${isActive ? localStyles.activeNavButton : ""}`}
            >
              {item.name}
            </Button>
          );
        })}
      </nav>
    </div>
  );
}
