
import { useState, useEffect } from "react";
import api from "../../services/config";
import ProductCard from "../ProductCard";


const Homepages = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await api.get("/products");
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("دریافت محصولات ناموفق بود.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <p>Please wait , loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div> 

      <div className="products-container">
        {products. slice (0, 12) .map((product) => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepages;



