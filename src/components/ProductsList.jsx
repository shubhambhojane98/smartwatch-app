import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = ({ products }) => {
  return (
    <div className="flex flex-row flex-wrap gap-5 m-20">
      {products?.map((product) => (
        <ProductItem
          key={product._id}
          id={product._id}
          Edit={false}
          Delete={false}
          name={product.name}
          description={product.description}
          image={product.image}
          brand={product.brand}
          price={product.price}
          Add={true}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductsList;
