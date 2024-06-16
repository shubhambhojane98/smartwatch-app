"use client";
import { updateProduct } from "@/app/actions/product.actions";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const UpdateProductForm = ({ product }) => {
  const [prodcutName, setProductName] = useState(product.name || "");
  const [prodcutDescription, setProdcutDescription] = useState(
    product.description || ""
  );
  const [prodcutPrice, setProductPrice] = useState(product.price || "");
  const [prodcutImage, setProductImage] = useState(product.image || "");
  const [prodcutBrand, setProductBrand] = useState(product.brand || "");
  const [prodcutStock, setProductStock] = useState(product.stock || 0);
  const router = useRouter();
  const ref = useRef();

  const UPLOAD_PRESET = "onr34xi0";
  const CLOUD_NAME = "dqzlucllh";

  console.log(product);

  const handleSubmit = async (formData) => {
    const image = await uploadImage();

    console.log("IMAGE", image);
    const response = await updateProduct(formData, image);
    if (response?.error) {
      console.log(response.error);
    } else {
      console.log("User updated successfully");
      router.refresh();
      router.push("/dashboard/manageProduct");
      ref.current?.reset();
    }
  };

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

  return (
    <div className="mx-60">
      <h1 className="font-semibold text-xl text-center mb-2">Edit Product</h1>
      <form
        ref={ref}
        action={handleSubmit}
        className="flex flex-col h-2/4 justify-evenly shadow-md rounded-lg p-3"
      >
        <input type="hidden" name="id" value={product?._id} />
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setProductName(e.target.value)}
          value={prodcutName}
          name="name"
          type="text"
          placeholder="Product Name"
        />
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setProdcutDescription(e.target.value)}
          value={prodcutDescription}
          name="description"
          type="text"
          placeholder="Prodcut Description"
        />
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setProductPrice(e.target.value)}
          value={prodcutPrice}
          name="price"
          type="number"
          placeholder="Product Price"
        />
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setProductBrand(e.target.value)}
          value={prodcutBrand}
          name="brand"
          type="text"
          placeholder="Product Brand"
        />
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setProductStock(e.target.value)}
          value={prodcutStock}
          name="stock"
          type="number"
          placeholder="Product Stock"
        />
        <div className="mt-2">
          <label className="px-2">Select Image</label>
          <input
            className=""
            onChange={(e) => setProductImage(e.target.files[0])}
            name="image"
            type="file"
            accept="image"
            placeholder="Select Image"
          />
        </div>
        <div className=" flex justify-center">
          <button
            type="submit"
            className="bg-green-500 rounded-md p-3 mt-2 w-32"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductForm;
