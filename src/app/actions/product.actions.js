"use server";
import Product from "@/models/ProductModel";
import User from "@/models/UserModel";
import connectMongoDB from "@/utils/db";
import { revalidatePath } from "next/cache";

export async function getUser(email) {
  try {
    await connectMongoDB();
    const user = await User.findOne({ email });

    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllProducts(req) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await connectMongoDB();

    const products = await Product.find();

    revalidatePath("/dashboard/manageproduct");

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(id) {
  try {
    console.log("id", id);
    const product = await Product.findOne({ _id: id });
    console.log("product", product);
    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id, path) {
  console.log(id, path);
  try {
    await connectMongoDB();
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (deleteProduct) revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

export async function updateProduct(formData, image) {
  console.log("image", image);
  try {
    await connectMongoDB();
    const id = formData.get("id");
    console.log(id);

    // const isProductExist = await Product.findOne({ _id: id });

    const eventToUpdate = await Product.findById(id);
    if (!eventToUpdate) {
      return {
        error: "No user exists",
      };
    } else {
      const name = formData.get("name");
      const description = formData.get("description");
      const brand = formData.get("brand");
      const price = formData.get("price");
      const countInStock = formData.get("countInStock");

      console.log(name);

      const response = await Product.findByIdAndUpdate(
        id,
        {
          $set: { name, description, brand, price, countInStock, image },
        },
        { new: true }
      );
      console.log("response", response);
      if (!response) {
        return {
          error: "Product not updated",
        };
      } else {
        revalidatePath(`/dashboard/manageProduct`);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
