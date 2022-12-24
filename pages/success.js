import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContext";
import runFireworks, { runRealisticLook } from "../lib/utils";

export default function Success() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
    // runRealisticLook();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for you order!</h2>
        <p className="email-msg">Check your email for the receipt.</p>
        <p className="description">
          If you have any queries, feel free to email us.
          <a className="email" href="mailto:premiumheadphone424@mail.com">
            premiumheadphone424@mail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}
