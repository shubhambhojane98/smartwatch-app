"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/lib/store/features/cart/cartSlice";

const ProductItem = ({
  Add,
  Edit,
  Delete,
  image,
  description,
  name,
  price,
  brand,
  handleDelete,
  id,
  product,
}) => {
  const path = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  // const cart = useSelector((state) => state.cart["cartItems"]);

  // console.log("cart", cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    router.push("/cart");
  };

  console.log("id", id, path);
  return (
    <Card className="shadow-md flex flex-col justify-evenly w-72">
      <CardHeader>
        <Image
          // src="https://m.media-amazon.com/images/I/61QeNWSSHaL._AC_UY1000_.jpg"
          src={image}
          width={100}
          height={100}
          alt="product-image"
          className="object-contain h-48 w-96"
        />
      </CardHeader>
      <CardContent className="flex flex-col justify-evenly">
        <CardTitle className="text-center">{name}</CardTitle>
        <CardDescription className="mt-3">{description}</CardDescription>
        <CardDescription className="text-center mt-2 font-semibold">
          $ {price}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center items-baseline">
        {Add && (
          <Button onClick={() => handleAddToCart(product)} className="mx-2">
            Add to Cart
          </Button>
        )}
        {Edit && (
          <Button
            classNamem="mx-2"
            onClick={() => {
              router.push(`/dashboard/manageProduct/${id}`);
            }}
          >
            Edit
          </Button>
        )}
        {Delete && (
          <Button
            onClick={() => handleDelete(id, path)}
            className="mx-2"
            variant="destructive"
          >
            Delete
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductItem;
