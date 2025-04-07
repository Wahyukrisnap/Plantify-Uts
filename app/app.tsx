// app/app.tsx
import React from "react";
import { Slot } from "expo-router";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Slot /> {}
    </CartProvider>
  );
}
