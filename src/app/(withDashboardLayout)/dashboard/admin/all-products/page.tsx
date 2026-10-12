"use client";

import { useGetAllProductsQuery } from "@/redux/api";
import AllProductsHOC from "./Components/AllProductHOC";
import { useQueryParams } from "@/hooks/useQueryParams";

export default function AllProductsPage() {
  const queryParams = useQueryParams();

  const query = useGetAllProductsQuery(queryParams);
  return (
    <AllProductsHOC
      query={query}
      noDataLink="/dashboard/admin/all-products"
      noDataMessage="No Product Found."
      noDataText="Back To All Products"
    />
  );
}
