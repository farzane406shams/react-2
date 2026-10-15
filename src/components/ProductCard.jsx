const ProductCard = ({ product }) => {

  return (


    <div className="product-card">

      <img
        className="product-image"
        src={product.image}
        alt={product.title}
      />
      <div className="product-info">
        <p><span className="white-label">Price:</span> ${product.price}</p>
        <p><span className="white-label">Category:</span> {product.category}</p>
        <p><span className="white-label">Rate:</span> {product.rating.rate}</p>
        <p><span className="white-label">Count:</span> {product.rating.count}</p>
        <button> Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;