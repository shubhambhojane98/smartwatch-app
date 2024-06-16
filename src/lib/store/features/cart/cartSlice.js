import { createSlice } from "@reduxjs/toolkit";
import { original } from "immer";
import { toast } from "react-toastify";

const initialState = {
  cartItems:
    typeof window !== "undefined"
      ? localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
      : null,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.cartItems.push(action.payload);

      console.log(original(state.cartItems));

      const itemIndex = state.cartItems.findIndex((item) => {
        return item._id === action.payload._id;
      });

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info("increased product quantity", { position: "bottom-left" });
        console.log("increased Count");
      } else {
        let tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("Added a new product to cart", {
          position: "bottom-left",
        });
        console.log("added product");
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
