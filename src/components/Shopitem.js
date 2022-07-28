import "./shopitem.css";

const Shopitem = (prop) => {
  return (
    <div className="item">
      <div>{prop.product.productName}</div>
      <div className="image">
        <img src={prop.product.image} alt={prop.product.productName} />
      </div>
      <div>${prop.product.price.toFixed(2)}</div>
      <button type="button" className = "addToCart" onClick={() => prop.handleIncrement(prop.product)}>
        Add to Cart ({prop.product.quantity})
      </button>
    </div>
  );
};

export default Shopitem;
