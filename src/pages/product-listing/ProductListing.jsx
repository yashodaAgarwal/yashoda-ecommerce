import { ContainerCard, Filter, Navigation } from "../../components";
import "./produc-listing.css";
import React, { useEffect } from "react";
import axios from "axios";
import { useFilter, useProduct } from "../../context";

export default function ProductListing() {
  const {
    FilterState: { byCategory, sortBy, byRating, byPrice },
        
  } = useFilter();
  const { ProductState, productDispatch } = useProduct();

  const transformProduct = () => {
    let sortedProduct = ProductState.productdata;

    if (sortBy) {
      sortedProduct = sortedProduct.sort((a, b) =>
        sortBy === "PRICE_LOW_TO_HIGH" ? a.price - b.price : b.price - a.price
      );
    }
    if (byCategory) {
      sortedProduct = sortedProduct.filter(
        (prod) => prod.categoryName === byCategory
      );
    }
    if (byRating) {
      sortedProduct = sortedProduct.filter((prod) => prod.rating >= byRating);
    }
    if (byPrice) {
      sortedProduct = sortedProduct.filter((prod) => prod.price <= byPrice);
    }
    return sortedProduct;
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        productDispatch({ type: "savedata", payload: response.data.products });
      } catch (error) {
        console.log(error, "Could not load data");
      }
    })(); 
  }, [productDispatch]);

  return (
    <>
      <Navigation />
      <div className="main">
        <div class="main-body-sec">
      <Filter />
      <div class="right-body-section">
        <h1 class="showing-heading">Products</h1>
        <div class="product-flex">
          {transformProduct().map((product) => (
            <ContainerCard product={{ product }} />
          ))}
        </div>
      </div>
      </div></div>
    </>
  );
}
