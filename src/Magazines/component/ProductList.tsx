import React from "react";
import type { Product } from "../hooks/useAllProducts";

interface ProductListProps {
  selectedCategories: number[];
  products: Product[];
  loading: boolean;
  total: number;
  page: number;
  limit: number;
  onPageChange: (page: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  selectedCategories,
  products,
  loading,
  total,
  page,
  limit,
  onPageChange,
}) => {
  // Lọc products theo selectedCategories
  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          selectedCategories.includes(product.category.id)
        );
  const totalPages = Math.ceil(total / limit);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-gray-600">Đang tải sản phẩm...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Danh sách sản phẩm</h2>
        <span className="text-sm text-gray-600">
          {total} sản phẩm | Trang {page}/{totalPages}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col p-4 transition-shadow duration-300 bg-white border rounded-lg hover:shadow-lg"
          >
            {/* Product Image */}
            <div className="relative mb-3">
              <img
                src={
                  product.images[0] ||
                  "https://via.placeholder.com/300x200?text=Product"
                }
                alt={product.title}
                className="object-cover w-full h-40 rounded"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/300x200?text=Product";
                }}
              />
              <span className="absolute px-2 py-1 text-xs font-bold text-white bg-orange-500 rounded top-2 right-2">
                Sale
              </span>
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow">
              <h3 className="mb-2 text-sm font-bold line-clamp-2">
                {product.title}
              </h3>

              <p className="mb-3 text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>

              {/* Price */}
              <div className="mt-auto">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-red-600">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && !loading && (
        <div className="py-8 text-center text-gray-500">
          Không tìm thấy sản phẩm nào trong danh mục này
        </div>
      )}

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              className={`px-3 py-1 text-sm rounded ${
                num === page
                  ? "bg-blue-500 text-white font-bold"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
              disabled={num === page}
              onClick={() => onPageChange(num)}
            >
              {num}
            </button>
          ))}
        </div>
      )}
      <div>
        
      </div>
    </div>
    
  );
};

export default ProductList;
