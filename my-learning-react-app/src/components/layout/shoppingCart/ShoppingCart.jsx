import { RotateCcw, Save, ShoppingCartIcon, Trash } from "lucide-react";
import localStyles from "./ShoppingCart.module.css";
import Button from "../../product/button/Button";
import Input from "../../product/input/Input";
import Formatter from "../../../shared/formatCurrency/Formatter";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
export default function ShoppingCart() {
  const { cart, setCart, totalQuantity, subTotal, shippingFee, totalPay } =
    useContext(CartContext);
  const handleQuantityChange = (productId, value) => {
    let quantity = Number(value);
    setCart((prev) => {
      if (quantity <= 0) {
        quantity = 0;
      }
      return prev.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: quantity,
            }
          : item,
      );
    });
  };
  const handleIncrease = (productId) => {
    setCart((prev) => {
      const existProd = prev?.find((item) => item.id === productId);
      if (!existProd) return prev;
      if (existProd.quantity > 999) {
        return prev.map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: 999,
              }
            : item,
        );
      }
      return prev.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
    });
  };

  const handleDecrease = (productId) => {
    setCart((prev) => {
      const existProd = prev?.find((item) => item.id === productId);
      if (!existProd) return prev;
      if (existProd.quantity <= 1) {
        return prev.map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: 0,
              }
            : item,
        );
      }
      return prev.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      );
    });
  };

  const handleDeleteCartItem = (productId) => {
    const existProd = cart?.find((item) => item.id === productId);
    const confirmDelete = confirm("Bạn có muốn xóa " + existProd.name);
    if (!confirmDelete) return;
    setCart((prev) => {
      return prev.filter((item) => item.id !== productId);
    });
  };

  const handleClearCart = () => {
    if (cart.length <= 0) return;
    const confirmClear = confirm("Bạn có muốn xóa giỏ hàng không?");
    if (!confirmClear) return;
    setCart([]);
  };
  const handleSaveCart = () => {
    if (cart.length <= 0) return;
    localStorage.setItem("cart_item", JSON.stringify(cart));
    alert("Đã lưu giỏ hàng");
  };
  const handleRestoreCart = () => {
    const savedCart = localStorage.getItem("cart_item");

    if (!savedCart) {
      alert("Không có dữ liệu để khôi phục");
      return;
    }
    setCart(JSON.parse(savedCart));
  };

  return (
    <div className={localStyles.shoppingCart}>
      {/* title */}
      <div>
        <h2 className={localStyles.title}>
          <ShoppingCartIcon className={localStyles.icon} />
          Giỏ hàng
        </h2>
      </div>
      {/* table */}
      <table className={localStyles.table}>
        <thead className={localStyles.tableHead}>
          <tr>
            <th>Sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody className={localStyles.tableBody}>
          {cart?.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <img className={localStyles.tableImg} src={item.image} />
                  <div className={localStyles.detailsProduct}>
                    <p className={localStyles.productName}>{item.name}</p>
                    <p className={localStyles.productPrice}>
                      {Formatter(item.price)}
                    </p>
                  </div>
                </td>
                <td className={localStyles.productPrice}>
                  {Formatter(item.price)}
                </td>
                <td>
                  <div className={localStyles.inputWrapper}>
                    <Button
                      onClick={() => handleIncrease(item.id)}
                      className={`${localStyles.btn} ${localStyles.btnIncrease}`}
                    >
                      +
                    </Button>
                    <Input
                      className={localStyles.inputCover}
                      inputClassName={localStyles.inputCount}
                      type="number"
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      value={item.quantity}
                    />
                    <Button
                      onClick={() => handleDecrease(item.id)}
                      className={`${localStyles.btn} ${localStyles.btnDecrease}`}
                    >
                      -
                    </Button>
                  </div>
                </td>
                <td className={localStyles.productPrice}>
                  {Formatter(item.price * item.quantity)}
                </td>
                <td>
                  <div className={localStyles.btnDeleteWrapper}>
                    <Button
                      className={localStyles.btnDelete}
                      onClick={() => handleDeleteCartItem(item.id)}
                    >
                      {<Trash size={16} />}
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* total pay */}
      <div className={localStyles.totalAction}>
        <div className={localStyles.totalRow}>
          <p>Tổng số lượng</p>
          <p className={localStyles.textBlue}>{totalQuantity}</p>
        </div>
        <div className={localStyles.totalRow}>
          <p>Tạm tính</p>
          <p className={localStyles.productPrice}>{Formatter(subTotal)}</p>
        </div>
        <div className={localStyles.totalRow}>
          <p>Phí ship</p>
          <p className={localStyles.productPrice}>{Formatter(shippingFee)}</p>
        </div>
        <div className={`${localStyles.totalRow} ${localStyles.totalPayRow}`}>
          <strong
            className={`${localStyles.textBlue} ${localStyles.totalTitlePay}`}
          >
            Tổng thanh toán
          </strong>
          <p className={`${localStyles.textBlue} ${localStyles.totalTitlePay}`}>
            {Formatter(totalPay)}
          </p>
        </div>
      </div>
      {/* button action */}
      <div className={localStyles.btnActionWrapper}>
        <Button
          prefix={<Save size={18} />}
          className={`${localStyles.btnAction}`}
          onClick={handleSaveCart}
        >
          Lưu giỏ hàng
        </Button>
        <Button
          prefix={<RotateCcw size={18} />}
          className={`${localStyles.btnAction}`}
          onClick={handleRestoreCart}
        >
          Khôi phục dữ liệu
        </Button>
        <Button
          prefix={<Trash size={18} />}
          onClick={handleClearCart}
          className={`${localStyles.btnActionDelete} ${localStyles.btnAction}`}
        >
          Xóa toàn bộ
        </Button>
      </div>
    </div>
  );
}
