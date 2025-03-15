import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.action";

export const metadata = {
  title: `Home`,
};

const HomePage = async () => {
  const latestProduct = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProduct} title="New Arrivals" />
    </>
  );
};

export default HomePage;
