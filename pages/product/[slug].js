/* Square bracket in the file name means is that this going to be dynamic */
import React, { useState } from "react";
import Product from "../../components/Product";
import { client, urlFor } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

export default function ProductDetails({ products, product }) {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { incQty, decQty, qty, onAdd, buyNow, setQty } = useStateContext();
  const [editable, setEditable] = useState(false);

  function handleDoubleClick() {
    console.log("DoubleClick");
    setEditable(true);
  }

  function handleBlur() {
    console.log("Blur");
    setEditable(false);
  }

  function handleChange(event) {
    setQty(event.target.value);
  }

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i == index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className="price">₹{price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>

              <span
                className="num"
                // onClick=""
                onDoubleClick={handleDoubleClick}
                onBlur={handleBlur}
                contentEditable={editable}
                onChange={handleChange}
              >
                {qty}
              </span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to cart
            </button>
            <button
              type="button"
              className="buy-now"
              onClick={() => buyNow(product, qty)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const query = `*[_type=="product"]{
        slug{
            current
        }
    }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type=="product"&& slug.current == '${slug}'][0]`;
  const productQuery = '*[_type=="product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productQuery);

  return {
    props: { products, product },
  };
}
