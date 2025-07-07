import React, { useState } from "react";
import ProductGrid from "../Component/ProductGrid";
import ShoppingCart from "../Component/ShoppingCart";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string;
  unit?: string;
  quantity?: number;
}

const BigCMarket: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="px-4 py-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-teal-600 rounded">
                <span className="text-xl font-bold text-white">B</span>
              </div>
              <span className="text-xl font-bold text-teal-600">
                Big MARKET
              </span>
            </div>

            {/* Categories Dropdown */}
            <div className="items-center hidden md:flex">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <span>📋</span>
                <span>Danh mục sản phẩm</span>
                <span>▼</span>
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm ..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="absolute text-gray-400 transform -translate-y-1/2 right-2 top-1/2 hover:text-gray-600">
                  🔍
                </button>
              </div>
            </div>

            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative flex items-center gap-2 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              <span className="text-xl">🛒</span>
              <div className="text-left">
                <div className="text-sm">Giỏ hàng của bạn</div>
                <div className="text-xs text-gray-500">
                  ({cartItems.length}) sản phẩm
                </div>
              </div>
              {cartItems.length > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        <ProductGrid onAddToCart={handleAddToCart} />

        {/* Cart Overlay */}
        {isCartOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={() => setIsCartOpen(false)}
          />
        )}

        {/* Shopping Cart */}
        <ShoppingCart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      </main>
    </div>
  );
};

export default BigCMarket;
