import { getProductById, updateProduct } from "@/app/actions/product.actions";
import UpdateProductForm from "@/components/UpdateProductForm";
import React from "react";

const EditProductPage = async ({ params }) => {
  console.log("params", params.productId);
  const id = params.productId;
  const productInformation = await getProductById(id);

  console.log(productInformation);

  const UPLOAD_PRESET = "onr34xi0";
  const CLOUD_NAME = "dqzlucllh";

  const uploadImage = async () => {
    if (!prodcutImage) return;

    const formData = new FormData();

    formData.append("file", prodcutImage);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      const imageUrl = data["secure_url"];

      return imageUrl;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (formData) => {
    "use server";
    // const imageUrl = await uploadImage();
    console.log(formData);
    const response = await updateProduct(formData);
    if (response?.error) {
      console.log(response.error);
    } else {
      console.log("User updated successfully");
    }
  };

  return (
    <div>
      {productInformation && (
        <UpdateProductForm
          handleSubmit={handleSubmit}
          product={productInformation}
        />
      )}
    </div>
  );
};

export default EditProductPage;
