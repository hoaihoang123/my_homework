import React, { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  unit: string;
  category?: string;
}

interface ShoppingCartProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  isOpen = true,
  onClose,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Bột Xốt Nấu Demiglace Knorr 1kg",
      price: 315000,
      quantity: 1,
      image: "/api/placeholder/60/60",
      unit: "g",
      category: "Đơn Vị Tính:Lẻ",
    },
    {
      id: 2,
      name: "Nước Tương Kikkoman 1L",
      price: 180000,
      quantity: 2,
      image: "/api/placeholder/60/60",
      unit: "g",
    },
    {
      id: 3,
      name: "Bánh đa Đỗ Lương Nghệ An 5 chiếc/túi",
      price: 25000,
      quantity: 1,
      image: "/api/placeholder/60/60",
      unit: "đ",
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + " đ";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-teal-600 rounded text-white text-sm flex items-center justify-center">
            🛒
          </div>
          <span className="text-lg font-medium text-gray-700">
            Giỏ hàng của bạn ({cartItems.length}) sản phẩm
          </span>
        </div>
        {onClose && (
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            ✕
          </button>
        )}
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 pb-4 border-b border-gray-100"
          >
            {/* Remove button */}
            <button
              onClick={() => removeItem(item.id)}
              className="w-6 h-6 rounded-full bg-red-100 text-red-600 text-sm hover:bg-red-200 flex items-center justify-center mt-1"
            >
              ✕
            </button>

            {/* Product Image */}
            <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                {item.name}
              </h3>

              {item.category && (
                <p className="text-xs text-gray-500 mb-2">{item.category}</p>
              )}

              <div className="flex items-center justify-between">
                {/* Quantity Controls */}
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                  >
                    −
                  </button>
                  <span className="w-12 h-8 flex items-center justify-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <div className="text-right">
                  <div className="text-sm font-semibold text-red-600">
                    {item.quantity} x {formatPrice(item.price)}
                  </div>
                  <div className="text-xs font-bold text-gray-900">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {cartItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🛒</div>
            <p className="text-gray-500">Giỏ hàng của bạn đang trống</p>
          </div>
        )}
      </div>

      {/* Footer */}
      {cartItems.length > 0 && (
        <div className="border-t border-gray-200 p-4 space-y-4">
          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Tổng cộng</span>
            <span className="text-xl font-bold text-red-600">
              {formatPrice(getTotalPrice())}
            </span>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
            Xem giỏ hàng
          </button>

          {/* Continue Shopping */}
          <button className="w-full border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
            Tiếp tục mua sắm
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
