import "./Shop.css";
import Shopitem from "./Shopitem";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faShoppingCart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Shop() {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "The Burnt Grandmaster II Series",
      price: 209,
      quantity: 0,
      image:
        "https://www.chesscomshop.com/media/catalog/product/cache/9fdaed98b284e29d64008a8e3820fba5/m/e/menwgmii40-brnt-alt.jpg",
    },
    {
      id: 2,
      productName: "The Zagreb '59 Series",
      price: 219.0,
      quantity: 0,
      image:
        "https://www.chesscomshop.com/media/catalog/product/cache/9fdaed98b284e29d64008a8e3820fba5/m/e/menwzag3875.png",
    },
    {
      id: 3,
      productName: "The Anderssen Dropjaw Series",
      price: 159.0,
      quantity: 0,
      image:
        "https://www.chesscomshop.com/media/catalog/product/cache/9fdaed98b284e29d64008a8e3820fba5/m/e/menwand2875-p.png",
    },
    {
      id: 4,
      productName: "The Leningrad Series",
      price: 199.0,
      quantity: 0,
      image:
        "https://www.chesscomshop.com/media/catalog/product/cache/9fdaed98b284e29d64008a8e3820fba5/m/e/menwlen40.png",
    },
    {
      id: 5,
      productName: "The Empire Series Luxury",
      price: 374.5,
      quantity: 0,
      image:
        "https://www.chesscomshop.com/media/catalog/product/cache/9fdaed98b284e29d64008a8e3820fba5/m/e/menwemp44-mix-profile_3_1.jpg",
    },
    {
      id: 6,
      productName: "The Challenger Series Luxury",
      price: 495.0,
      quantity: 0,
      image:
        "https://www.chesscomshop.com/media/catalog/product/cache/9fdaed98b284e29d64008a8e3820fba5/m/e/menwchl44-ir-b.png",
    },
    {
      id: 7,
      productName: "The Tsarist Russian Series Luxury",
      price: 495.0,
      quantity: 0,
      image:
        "https://www.chesscomshop.com/media/catalog/product/cache/9fdaed98b284e29d64008a8e3820fba5/m/e/menwtsr44-p.png",
    },
    {
      id: 8,
      productName: "The Selenus Luxury Bone",
      price: 595.0,
      quantity: 0,
      image:
        "https://www.chesscomshop.com/media/catalog/product/cache/9fdaed98b284e29d64008a8e3820fba5/m/e/menbsel40.png",
    },
  ]);

  const [cartSize, setCartSize] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [paneWidth, setPaneWidth] = useState("0%");

  const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  const xMark = <FontAwesomeIcon icon={faXmark} />;

  useEffect(() => {
    let sum = 0;
    products.forEach((item) => {
      sum = sum + item.quantity;
    });
    setCartSize(sum);
  }, [products]);

  useEffect(() => {
    let sum = 0;
    products.forEach((item) => {
      sum = sum + item.price * item.quantity;
    });
    setTotalCost(sum);
  }, [products]);

  useEffect(() => {
    const handleShowCart = () => {
      if (paneWidth === "0%") {
        setPaneWidth("80%");
      } else setPaneWidth("0%");
    };

    const element = document.getElementById("showCartButton");
    element.addEventListener("click", handleShowCart);

    const element2 = document.getElementById("closeCartButton");
    element2.addEventListener("click", handleShowCart);

    return () => {
      element.removeEventListener("click", handleShowCart);
      element2.removeEventListener("click", handleShowCart);
    };
  }, [paneWidth]);

  const handleIncrement = (product) => {
    let tempProducts = [...products];
    let index = tempProducts.indexOf(product);
    tempProducts[index].quantity++;
    setProducts(tempProducts);
  };

  const handleDecrement = (product) => {
    let tempProducts = [...products];
    let index = tempProducts.indexOf(product);
    tempProducts[index].quantity--;
    setProducts(tempProducts);
  };

  const handleCheckout = () => {
    alert("Sorry, this is not a real store!");
  };

  return (
    <div>
      <div className="header">
        <Link to="/">
          <h1>Chess Set Store</h1>
        </Link>
        <Link to="Shop">
          <h1>Shop</h1>
        </Link>
        <h1 id="showCartButton">
          {shoppingCartIcon} ({cartSize})
        </h1>
      </div>
      <div
        className="sidePanel"
        style={{
          width: paneWidth,
        }}
      >
        <h1 id="closeCartButton">{xMark}</h1>

        <button onClick={handleCheckout} id="checkoutButton">
          Proceed to Checkout
        </button>

        <div id="tableContainer">
          {products.map((prod) => {
            if (prod.quantity > 0) {
              return (
                <table className="itemTable">
                  <tr>
                    <th className="productName">{prod.productName}</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                  </tr>
                  <tr>
                    <td>
                      <img src={prod.image} alt={prod.productName} />
                    </td>
                    <td>${prod.price.toFixed(2)}</td>
                    <td>{prod.quantity}</td>
                    <td>${(prod.price * prod.quantity).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <div>
                      <button
                        id="addToCart"
                        onClick={() => handleIncrement(prod)}
                      >
                        +
                      </button>
                      <button
                        id="removeFromCart"
                        onClick={() => handleDecrement(prod)}
                      >
                        -
                      </button>
                    </div>
                  </tr>
                </table>
              );
            }
          })}
        </div>
        <hr></hr>
        <div id="totalPrice">Total Price: $ {totalCost.toFixed(2)}</div>
      </div>

      <div className="itemsContainer">
        {products.map((prod) => {
          return (
            <Shopitem
              key={prod.id}
              product={prod}
              handleIncrement={handleIncrement}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
