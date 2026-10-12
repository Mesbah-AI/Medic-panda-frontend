import { IProduct } from "@/types";
import {
  Business,
  Category,
  Inventory,
  LocalOffer,
  Star
} from "@mui/icons-material";
import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography
} from "@mui/material";
import Image from "next/image";

interface ProductDetailsCardProps {
  product: IProduct;
  onEdit?: (product: IProduct) => void;
  onDelete?: (productId: string) => void;
  onView?: (productId: string) => void;
}

export default function ProductDetailsCard({
  product,
  onEdit,
  onDelete,
  onView,
}: ProductDetailsCardProps) {
  const {
    _id,
    name,
    thumbnail,
    price,
    discount,
    stockStatus,
    category,
    manufacturer,
    rating,
    isWishList,
  } = product;

  const discountPercentage = discount?.discountStatus ? discount.percentage : 0;
  const discountPrice = discount?.discountStatus
    ? discount.discountPrice
    : price;

  // Calculate performance metrics (mock data for admin)
  const performanceMetrics = {
    conversionRate: Math.random() * 100,
    views: Math.floor(Math.random() * 1000),
    sales: Math.floor(Math.random() * 100),
    revenue: price * Math.floor(Math.random() * 100),
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 800,
        p: 3,
        borderRadius: 2,
      }}
    >
      <Grid container spacing={3}>
        {/* Product Image and Basic Info */}
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <Box
              sx={{
                position: "relative",
                p: 2,
                borderRadius: 2,
                backgroundColor: "grey.50",
                border: "1px solid",
                borderColor: "divider",
                textAlign: "center",
              }}
            >
              <Image
                src={thumbnail}
                alt={name}
                width={120}
                height={120}
                style={{
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
              {isWishList && (
                <Chip
                  icon={<Star />}
                  label="In Wishlist"
                  color="warning"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    fontWeight: 500,
                  }}
                />
              )}
            </Box>

            <Stack spacing={1}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color="text.primary"
              >
                {name}
              </Typography>

              <Chip
                icon={<Category />}
                label={category?.name}
                color="primary"
                variant="outlined"
                size="small"
                sx={{ fontWeight: 500 }}
              />

              <Chip
                icon={<Business />}
                label={manufacturer?.name}
                color="secondary"
                variant="outlined"
                size="small"
                sx={{ fontWeight: 500 }}
              />
            </Stack>
          </Stack>
        </Grid>

        {/* Pricing and Stock Info */}
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <Box>
              <Typography
                variant="caption"
                fontWeight={600}
                color="text.secondary"
                display="block"
                mb={1}
              >
                PRICING
              </Typography>
              {discount?.discountStatus ? (
                <Stack spacing={0.5}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color="primary.main"
                    >
                      ${discountPrice}
                    </Typography>
                    <Chip
                      label={`-${discountPercentage}%`}
                      color="success"
                      size="small"
                      sx={{ fontWeight: 600, fontSize: "0.7rem" }}
                    />
                  </Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.disabled",
                      textDecoration: "line-through",
                    }}
                  >
                    Original: ${price}
                  </Typography>
                </Stack>
              ) : (
                <Typography variant="h6" fontWeight={700} color="primary.main">
                  ${price}
                </Typography>
              )}
            </Box>

            <Box>
              <Typography
                variant="caption"
                fontWeight={600}
                color="text.secondary"
                display="block"
                mb={1}
              >
                STOCK STATUS
              </Typography>
              <Chip
                icon={<Inventory />}
                label={stockStatus ? "In Stock" : "Out of Stock"}
                color={stockStatus ? "success" : "error"}
                size="small"
                sx={{ fontWeight: 500 }}
              />
            </Box>

            <Box>
              <Typography
                variant="caption"
                fontWeight={600}
                color="text.secondary"
                display="block"
                mb={1}
              >
                RATING
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Star sx={{ color: "warning.main", fontSize: 18 }} />
                <Typography variant="body2" fontWeight={600}>
                  {rating.average.toFixed(1)}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  ({rating.count} reviews)
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      {/* Discount Period (if applicable) */}
      {discount?.discountStatus && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box
            sx={{
              p: 2,
              backgroundColor: "warning.50",
              borderRadius: 1,
              border: "1px solid",
              borderColor: "warning.200",
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocalOffer sx={{ color: "warning.main", fontSize: 18 }} />
              <Typography
                variant="caption"
                fontWeight={600}
                color="warning.dark"
              >
                Active Discount: {discount.startDate} - {discount.endDate}
              </Typography>
            </Stack>
          </Box>
        </>
      )}
    </Paper>
  );
}
