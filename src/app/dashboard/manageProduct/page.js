import { deleteProduct, getAllProducts } from "@/app/actions/product.actions";
import ProductItem from "@/components/ProductItem";
import React from "react";

const ProductList = async () => {
  const products = await getAllProducts();
  const handleDelete = async (id, path) => {
    "use server";
    await deleteProduct(id, path);
  };

  return (
    <div className="flex justify-evenly w-full flex-wrap gap-5">
      {products?.map((product) => (
        <ProductItem
          key={product._id}
          id={product._id}
          Edit={true}
          Delete={true}
          name={product.name}
          description={product.description}
          image={product.image}
          brand={product.brand}
          price={product.price}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ProductList;
