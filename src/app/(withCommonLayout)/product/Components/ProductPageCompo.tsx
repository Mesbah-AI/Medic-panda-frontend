import CategorySidebar from "@/app/(withCommonLayout)/product/Components/CategorySidebar";
import ProductCompo from "@/app/(withCommonLayout)/product/Components/ProductCompo";
import { ICategory, IProduct } from "@/types";
import { Box, Grid } from "@mui/material";

interface ProductPageCompoProps {
  products: IProduct[];
  meta: any;
  categories: ICategory[];
}

export default function ProductPageCompo({
  products,
  meta,
  categories,
}: ProductPageCompoProps) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <CategorySidebar categories={categories} />
      </Grid>
      <Grid item xs={12} md={9}>
        <ProductCompo products={products} meta={meta} />
      </Grid>
    </Grid>
  );
}
