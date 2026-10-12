import { ICategory } from "@/types";
import { Box } from "@mui/material";
import PriceRangeFilter from "./PriceRangeFilter";
import ProductCategory from "./ProductCategory";
import ProductSearchWithCategoryModalButton from "./ProductSearchWithCategoryModalButton";
import SortProduct from "./SortProduct";
import StockAvailabilityFilter from "./StockAvailabilityFilter";

export default function CategorySidebar({
  categories,
}: {
  categories: ICategory[];
}) {
  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        backgroundColor: { xs: "transparent", md: "background.paper" },
        padding: { xs: 0, md: 3 },
        borderRadius: 4,
        position: { md: "sticky", top: 0 },
        top: 0,
        width: "100%",
        boxShadow: { xs: 0, md: 4 },
      }}
    >
      {/* product search and category modal */}
      <ProductSearchWithCategoryModalButton categories={categories} />

      {/* product category for medium devices */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <ProductCategory categories={categories} />
        <StockAvailabilityFilter />
      </Box>
    </Box>
  );
}
