"use client";

import { useSearchParams } from "next/navigation";

export const useQueryParams = () => {
  const searchParams = useSearchParams();

  const params = Object.fromEntries(searchParams.entries());

  return { ...params, page: 1, limit: 10 };
};
