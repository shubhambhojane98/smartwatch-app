"use client";
import React, { useState } from "react";

const CreateProduct = () => {
  const [prodcutName, setProductName] = useState("");
  const [prodcutDescription, setProdcutDescription] = useState("");
  const [prodcutPrice, setProductPrice] = useState("");
  const [prodcutImage, setProductImage] = useState("");
  const [prodcutBrand, setProductBrand] = useState("");

  const UPLOAD_PRESET = "onr34xi0";
  const CLOUD_NAME = "dqzlucllh";

  console.log(prodcutImage);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageUrl = await uploadImage();

      const data = {
        name: prodcutName,
        description: prodcutDescription,
        price: prodcutPrice,
        image: imageUrl,
        brand: prodcutBrand,
      };

      console.log("data", data);

      const res = await fetch("/api/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        console.log("success");
      } else {
        console.log("error");
      }
      e.target.reset();
    } catch (error) {
      console.log("Error", error);
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
      <h1 className="font-semibold text-xl text-center mb-2">Create Product</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col h-2/4 justify-evenly shadow-md rounded-lg p-3"
      >
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          placeholder="Product Name"
        />
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setProdcutDescription(e.target.value)}
          type="text"
          placeholder="Prodcut Description"
        />
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setProductPrice(e.target.value)}
          type="text"
          placeholder="Product Price"
        />
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setProductBrand(e.target.value)}
          type="text"
          placeholder="Product Brand"
        />
        <div className="mt-2">
          <label className="px-2">Select Image</label>
          <input
            className=""
            onChange={(e) => setProductImage(e.target.files[0])}
            type="file"
            accept="image"
            placeholder="Select Image"
          />
        </div>
        <div className=" flex justify-center">
          <button className="bg-green-500 rounded-md p-3 mt-2 w-32">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
