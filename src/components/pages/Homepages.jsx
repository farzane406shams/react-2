
import api from "../../services/config";
import ProductCard from "../ProductCard";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../Search.jsx";
import Number from "../Number.jsx";

const Homepages = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { search, setSearch } = useContext(UserContext);
  const [input, setInput] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await api.get("/products");
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Fail to fetch products...");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredProducts = products.filter((product) => {
    if (search === "") {
      return true;
    }

    return product.category === search;
  });

  if (loading) {
    return <p>Please wait, loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Number />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
  <button onClick={() => setSearch(input)}>
  Search
  </button>
      </div>

      <div className="products-container">
        {filteredProducts.slice(0, 12).map((product) => (
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
