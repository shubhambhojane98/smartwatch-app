import Product from "@/models/ProductModel";
import connectMongoDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();

    const { name, description, price, brand, image } = await req.json();

    // const body = await req.json();
    console.log(name, description, price, brand, image);

    const newProduct = new Product({ name, description, price, brand, image });
    await newProduct.save();

    return new NextResponse("Product has been created", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error", { status: 500 });
  }
}
