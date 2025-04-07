// app/_layout.tsx
import React from "react";
import { Slot } from "expo-router";
import { CartProvider } from "./context/CartContext";

export default function Layout() {
  return (
    <CartProvider>
      <Slot />
    </CartProvider>
  );
}
