import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const ProductDetail = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const request = await fetch(
          `https://fakestoreapi.com/products/${params.id}`
        );
        if (request.status !== 200) {
          const error = await request?.json();
          setLoading(false);
          throw new Error("Failed to fetch products", error);
        }
        const response = await request?.json();
        setData(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };
    fetchProducts();
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (!data) {
    return <h1>Ma'lumot topilmadi</h1>;
  }
  return <div>
    <h1>{data.title}</h1>
    <p>{data.description}</p>
    <img src={data.image} alt={data.title} />
  </div>;
};
export default ProductDetail;