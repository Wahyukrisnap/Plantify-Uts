// app/deskripsi.tsx
import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useCart } from "./context/CartContext";

const Deskripsi = () => {
  const { cartItems } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Deskripsi Tanaman</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Belum ada tanaman yang dipilih 😢</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item, index) => item.id.toString() + index}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              {item.price && (
                <Text style={styles.price}>Harga: {item.price}</Text>
              )}
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Deskripsi;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#A7F3D0",
    flex: 1,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#065f46",
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
    marginTop: 40,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 12,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#10b981",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: "#374151",
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: "#ef4444",
    fontWeight: "bold",
  },
});
