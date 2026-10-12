import ProductPageCompo from "@/app/(withCommonLayout)/product/Components/ProductPageCompo";
import CommonContainer from "@/components/shared/common-container/CommonContainer";
import { getAllCategoriesService } from "@/services/actions/category.service";
import { getAllProductService } from "@/services/actions/product.service";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: {
    page: number | string;
    searchTerm: string;
    category: string;
  };
}) {
  const { page, searchTerm, category } = searchParams;

  const productsPromise = getAllProductService({
    limit: 9,
    page: Number(page) || 1,
    searchTerm,
    category,
  });

  const categoriesPromise = getAllCategoriesService(9);

  const [productData, categoriesData] = await Promise.all([
    productsPromise,
    categoriesPromise,
  ]);

  return (
    <CommonContainer sx={{ py: 4, backgroundColor: "background.paper" }}>
      <ProductPageCompo
        products={productData?.data?.result}
        meta={productData?.data?.meta}
        categories={categoriesData.data?.result}
      />
    </CommonContainer>
  );
}
