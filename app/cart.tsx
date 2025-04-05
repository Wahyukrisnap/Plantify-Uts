// app/cart.tsx
import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { useCart } from "./context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        🛒 Your Cart
      </Text>

      {cartItems.length === 0 ? (
        <Text>Keranjang masih kosong 😢</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item, index) => item.id.toString() + index}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 20 }}>
              <Image
                source={item.image}
                style={{ width: "100%", height: 150 }}
              />
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>Rp {item.price}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Cart;
