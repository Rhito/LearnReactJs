import { Link, Plus } from "lucide-react";
import Button from "../../product/button/Button";
import Input from "../../product/input/Input";
import localStyles from "./FormAddNew.module.css";
import { CATEGORY_LIST } from "../../../shared/constants/Category";
import { useContext, useState } from "react";
import { ProductContext } from "./../../../context/ProductContext";
export default function FormAddNew() {
  const { setProducts } = useContext(ProductContext);
  const [productForm, setProductForm] = useState({
    name: "",
    price: 0,
    category: -1,
    image: "",
    description: "",
  });
  const handleChange = (field, value) => {
    setProductForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleSubmit = () => {
    if (!productForm.name || !productForm.price) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    setProducts((prev) => {
      const maxId = prev.length > 0 ? Math.max(...prev.map((p) => p.id)) : 0;
      if (productForm.category < 0) {
        productForm.category = 1;
      }
      const newProduct = {
        ...productForm,
        id: maxId + 1,
      };
      return [...prev, newProduct];
    });
    setProductForm({
      name: "",
      price: 0,
      categoryId: -1,
      image: "",
      description: "",
    });
    alert("Thêm sản phẩm thành công");
  };
  return (
    <div className={localStyles.formAddNew}>
      <div>
        <h2>Form thêm mới sản phẩm</h2>
      </div>
      <div className={localStyles.formInput}>
        <Input
          label="Tên sản phẩm"
          placeholder="Nhập tên sản phẩm"
          value={productForm.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <Input
          label="Giá (₫)"
          value={productForm.price}
          onChange={(e) => handleChange("price", e.target.value)}
          placeholder="Nhập giá"
          suffix={"₫"}
          type="number"
        />
        <div className={localStyles.formSelectWrapper}>
          <label htmlFor={localStyles.formSelect}>Category</label>
          <select
            value={productForm.category}
            onChange={(e) => handleChange("category", e.target.value)}
            className={localStyles.formSelect}
          >
            <option className={localStyles.formOption} value={-1} disabled>
              Chọn Category
            </option>
            {CATEGORY_LIST?.map((opt) => {
              return (
                <option key={opt.id} value={opt.id}>
                  {opt.name}
                </option>
              );
            })}
          </select>
        </div>

        <Input
          prefix={<Link size={16} />}
          label="URL ảnh"
          value={productForm.image}
          onChange={(e) => handleChange("image", e.target.value)}
          placeholder="Nhập URL hình ảnh (https://...)"
        />
        <div className={localStyles.textareaWrapper}>
          <label htmlFor={localStyles.formSelect}>Category</label>
          <textarea
            value={productForm.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className={localStyles.textarea}
            placeholder="Nhập mô tả sản phẩm"
          ></textarea>
        </div>

        <Button
          prefix={<Plus size={18} />}
          className={localStyles.buttonAddNew}
          onClick={handleSubmit}
        >
          Thêm mới sản phẩm
        </Button>
      </div>
    </div>
  );
}
