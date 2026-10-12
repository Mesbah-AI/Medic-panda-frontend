import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/common/image.config";
import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string({
    required_error: "Category name is required.",
  }),
  icon: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Max file size is 500KB.",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "Only .jpg, .jpeg, .png, and .webp files are accepted.",
    }),
  thumbnail: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Max file size is 500KB.",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "Only .jpg, .jpeg, .png, and .webp files are accepted.",
    }),
  description: z
    .string({
      required_error: "Description is required.",
    })
    .min(50, {
      message: "Description should be at least 50 characters long.",
    })
    .max(100, { message: "Description should not exceed 100 characters." }),
});

export const updateCategorySchema = z.object({
  name: z.string({
    required_error: "Category name is required.",
  }),
  description: z
    .string({
      required_error: "Description is required.",
    })
    .min(50, {
      message: "Description should be at least 50 characters long.",
    })
    .max(100, { message: "Description should not exceed 100 characters." }),
});
