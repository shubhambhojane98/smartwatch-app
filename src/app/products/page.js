import { getAllProducts } from "@/app/actions/product.actions";
import ProductsList from "@/components/ProductsList";
import React from "react";

const Product = async () => {
  const products = await getAllProducts();
  console.log("products", products);
  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
};

export default Product;
