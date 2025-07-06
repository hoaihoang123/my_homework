import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string;
  unit?: string;
}

interface ProductGridProps {
  onAddToCart?: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onAddToCart }) => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Bột Xốt Nấu Demiglace Knorr 1kg",
      price: 315000,
      image: "/api/placeholder/200/200",
      unit: "g",
    },
    {
      id: 2,
      name: "Nước Tương Kikkoman 1L",
      price: 180000,
      image: "/api/placeholder/200/200",
      unit: "g",
    },
    {
      id: 3,
      name: "Bánh đa Đỗ Lương Nghệ An 5 chiếc/túi",
      price: 25000,
      image: "/api/placeholder/200/200",
      unit: "đ",
    },
    {
      id: 4,
      name: "Sốt Worcestershire Lea & Perrins 290Ml",
      price: 150000,
      image: "/api/placeholder/200/200",
      unit: "đ",
    },
    {
      id: 5,
      name: "Mắm nêm ngon pha sẵn Thuận Phát",
      price: 22000,
      image: "/api/placeholder/200/200",
      unit: "đ",
    },
  ]);

  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + " đ";
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(0, quantity),
    }));
  };

  const addToCart = (product: Product) => {
    onAddToCart?.({ ...product });
    // Reset quantity after adding to cart
    setQuantities((prev) => ({
      ...prev,
      [product.id]: 0,
    }));
  };

  return (
    <div className="p-6">
      {/* Category Filters */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Thực phẩm khô</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-medium">
            Gia vị
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:bg-gray-50">
            Gạo, bún, phở, miến
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:bg-gray-50">
            Đồ hộp, thực phẩm so chế đóng gói
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:bg-gray-50">
            Bột các loại
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:bg-gray-50">
            Bánh đa nem, rằm
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:bg-gray-50">
            Hạt các loại
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:bg-gray-50">
            Mộc nhĩ, măng, nấm khô
          </button>
        </div>
      </div>

      {/* Sort Options */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-600">Thực phẩm khô</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Sắp xếp theo:</span>
          <select className="border border-gray-300 rounded px-3 py-1 text-sm">
            <option>Giá tăng</option>
            <option>Giá giảm</option>
            <option>Tên A-Z</option>
            <option>Tên Z-A</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Product Image */}
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
                {product.name}
              </h3>

              <div className="mb-3">
                <span className="text-lg font-bold text-green-600">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center justify-between">
                {/* Quantity Controls */}
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() =>
                      updateQuantity(
                        product.id,
                        (quantities[product.id] || 0) - 1
                      )
                    }
                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                    disabled={(quantities[product.id] || 0) <= 0}
                  >
                    −
                  </button>
                  <span className="w-12 h-8 flex items-center justify-center text-sm font-medium">
                    {quantities[product.id] || 0}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(
                        product.id,
                        (quantities[product.id] || 0) + 1
                      )
                    }
                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="px-3 py-1 bg-teal-600 text-white text-sm rounded hover:bg-teal-700 transition-colors"
                  disabled={(quantities[product.id] || 0) === 0}
                >
                  {(quantities[product.id] || 0) > 0
                    ? "Thêm vào giỏ hàng"
                    : "Thêm vào giỏ hàng"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
function setQuantities(arg0: (prev: any) => any) {
  throw new Error("Function not implemented.");
}
