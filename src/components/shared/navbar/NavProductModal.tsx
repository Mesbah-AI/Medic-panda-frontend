"use client";
import ProductPageCompo from "@/app/(withCommonLayout)/product/Components/ProductPageCompo";
import CustomModal from "@/components/modal/customModal/CustomModal";
import { useGetAllCategoriesQuery, useGetAllProductsQuery } from "@/redux/api";
import Loader from "../loader/Loader";

export default function NavProductModal({ onClose }: { onClose: () => void }) {
  const {
    data: products,
    isLoading: isProductLoading,
    error: productError,
  } = useGetAllProductsQuery({ limit: 9 });

  const {
    data: categories,
    isLoading: isCategoryLoading,
    error: categoryError,
  } = useGetAllCategoriesQuery({ limit: 9 });

  const isLoading = isProductLoading || isCategoryLoading;
  const hasError = productError || categoryError;

  return (
    <CustomModal
      open
      onClose={onClose}
      modalWidth="lg"
      sxProps={{
        "& .MuiDialog-paper": {
          width: { xs: "100%", md: "90%", lg: "90%" },
          padding: 2,
          margin: 0,
        },
      }}
    >
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <p>Failed to load products or categories. Please try again.</p>
      ) : (
        <ProductPageCompo
          products={products?.result ?? []}
          meta={products?.meta ?? { total: 0, page: 1, limit: 9 }}
          categories={categories?.result ?? []}
        />
      )}
    </CustomModal>
  );
}
