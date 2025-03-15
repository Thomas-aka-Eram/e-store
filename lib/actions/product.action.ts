"use server";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "@/app/constants";
import { convertToDecimal } from "../utils";
// Get latest Products

export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {
      createdAt: "desc",
    },
  });

  return convertToPlainObject(data.map(convertToDecimal));
}

//Get Single Product by it's slug
export async function getProductbySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}
