import React, { useEffect, useState } from "react";

type Category = {
  id: number;
  name: string;
  image: string;
};

interface ProductFilterProps {
  onFilterChange: (selectedIds: number[]) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCategories(data);
      } catch (e) {
        console.error("Error fetching categories:", e);
      }
    };
    fetchData();
  }, []);

  const handleCategoryChange = (categoryId: number, checked: boolean) => {
    let updatedSelection: number[];

    if (checked) {
      updatedSelection = [...selectedCategories, categoryId];
    } else {
      updatedSelection = selectedCategories.filter((id) => id !== categoryId);
    }

    setSelectedCategories(updatedSelection);
    onFilterChange(updatedSelection); // Truyền lên parent
  };

  return (
    <div className="p-4 ml-20 bg-white rounded-lg">
      <h2 className="mb-4 text-lg font-semibold">Bộ lọc</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center">
            <input
              type="checkbox"
              id={`filter-${category.id}`}
              className="mr-2"
              checked={selectedCategories.includes(category.id)}
              onChange={(e) =>
                handleCategoryChange(category.id, e.target.checked)
              }
            />
            <label htmlFor={`filter-${category.id}`} className="text-sm">
              {category.name}
            </label>
          </div>
        ))}
      </div>

      {/* Hiển thị số category đã chọn */}
      {selectedCategories.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          Đã chọn: {selectedCategories.length} danh mục
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
