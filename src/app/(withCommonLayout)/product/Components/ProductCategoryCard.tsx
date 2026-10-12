"use client";

import useSearch from "@/hooks/useSearch";
import { ICategory } from "@/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface ProductCategoryCardProps {
  onClose?: () => void;
  category: ICategory;
}

export default function ProductCategoryCard({
  category,
  onClose,
}: ProductCategoryCardProps) {
  const { search, getParam } = useSearch();

  const currentParam = getParam("category");

  const handleNavigate = () => {
    if (currentParam === category._id) {
      search({ category: "" });
    } else {
      search({ category: category._id });
    }

    onClose?.();
  };

  return (
    <Box
      onClick={handleNavigate}
      sx={{
        cursor: "pointer",
        bgcolor: `${
          currentParam === category._id ? "primary.light" : "background.paper"
        }`,

        p: 0.8,
        display: "flex",
        alignItems: "center",
        borderRadius: 2,
        boxShadow: 1,
        gap: 1,
        transition: "all 0.3s ease",
        border: "none",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 20,
          height: 20,
          borderRadius: "50%",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Image
          src={category.thumbnail}
          alt={category.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Typography
        variant="subtitle1"
        sx={{
          color: `${
            currentParam === category._id
              ? "primary.contrastText"
              : "text.primary"
          }`,
        }}
        fontWeight={500}
      >
        {category.name}
      </Typography>
    </Box>
  );
}
