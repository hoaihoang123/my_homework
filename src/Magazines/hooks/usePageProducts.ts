import { useEffect, useState } from "react";
import type { Product } from "./useAllProducts";

export function usePagedProducts(
  categoryId: number | null,
  page: number,
  limit: number
) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      let url = "";
      let totalUrl = "";
      if (categoryId) {
        url = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products?offset=${
          (page - 1) * limit
        }&limit=${limit}`;
        totalUrl = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`;
      } else {
        url = `https://api.escuelajs.co/api/v1/products?offset=${
          (page - 1) * limit
        }&limit=${limit}`;
        totalUrl = `https://api.escuelajs.co/api/v1/products`;
      }
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);

      // Fetch tổng số sản phẩm
      const totalRes = await fetch(totalUrl);
      const totalData = await totalRes.json();
      setTotal(totalData.length);

      setLoading(false);
    };
    fetchProducts();
  }, [categoryId, page, limit]);

  return { products, loading, total };
}
