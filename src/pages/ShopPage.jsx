import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import Loading from "../components/Loading";
const ShopPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const request = await fetch("https://fakestoreapi.com/products");
        if (request.status !== 200) {
          const error = await request.json();
          setLoading(false);
          throw new Error("Failed to fetch products", error);
        }
        const response = await request.json();
        setData(response);
        setLoading(false);
      } catch (error) {
        throw error;
      }
    };
    fetchProducts();
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <section>
      <h1>Shop</h1>
      <div className="products-flex">
        {data?.map((product) => (
          <CardComponent product={product} key={product?.id} />
        ))}
      </div>
    </section>
  );
};
export default ShopPage;
