import React, { useState } from "react";
import PageTitle from "../Widget/title";
import ProductList from "../component/ProductList";
import ProductFilter from "../component/ProductFilter";
import { usePagedProducts } from "../hooks/usePageProducts";

const LIMIT = 8;

const Category = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [page, setPage] = useState(1);

  // Chỉ cho phép chọn 1 category để phân trang đơn giản
  const categoryId =
    selectedCategories.length === 1 ? selectedCategories[0] : null;
  const { products, loading, total } = usePagedProducts(
    categoryId,
    page,
    LIMIT
  );

  const handleFilterChange = (selectedIds: number[]) => {
    setSelectedCategories(selectedIds);
    setPage(1); // Reset về trang 1 khi đổi filter
  };

  return (
    <div className="container px-4 py-4 pb-10 mx-auto ">
      <PageTitle name="Category" />
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="w-full md:w-1/4">
          <ProductFilter onFilterChange={handleFilterChange} />
        </div>
        <div className="w-full md:w-3/4">
          <ProductList
            selectedCategories={selectedCategories}
            products={products}
            loading={loading}
            total={total}
            page={page}
            limit={LIMIT}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
