import { getProducts } from "@/lib/api";
import ProductList from "@/components/ProductList";

// products are fetched on the server on every request (SSR)
export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await getProducts();

  return <ProductList initialProducts={products} />;
}
