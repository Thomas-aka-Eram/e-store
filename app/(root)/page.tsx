import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

export const metadata = {
  title: `Home`,
};

const HomePage = () => {
  return (
    <>
      <ProductList data={sampleData.products} title="New Arrivals" limit={4} />
    </>
  );
};

export default HomePage;
