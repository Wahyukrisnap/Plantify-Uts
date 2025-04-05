// app/app.tsx
import React from "react";
import { Slot } from "expo-router";
import { CartProvider } from "./context/CartContext"; // ⬅️ pastikan path-nya benar

export default function App() {
  return (
    <CartProvider>
      <Slot /> {/* semua halaman akan punya akses ke CartContext */}
    </CartProvider>
  );
}
