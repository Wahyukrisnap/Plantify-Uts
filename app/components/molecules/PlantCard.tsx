// app/components/molecules/PlantCard.tsx
import React from "react";
import { View, Text, Image, Button, Pressable } from "react-native";
import { useNavigation } from "expo-router";
import { useCart } from "../../context/CartContext";

const PlantCard = ({ plant }) => {
  const navigation = useNavigation();
  const { addToCart } = useCart();

  const handleBuy = () => {
    addToCart(plant);
    navigation.navigate("cart");
  };

  const handleDetail = () => {
    navigation.navigate("detail", { plant }); // ⬅️ kirim data ke detail
  };

  return (
    <View style={{ margin: 10, padding: 10, backgroundColor: "#fff" }}>
      <Pressable onPress={handleDetail}>
        <Image
          source={plant.image}
          style={{ width: "100%", height: 150, borderRadius: 10 }}
        />
      </Pressable>
      <Text>{plant.name}</Text>
      <Text numberOfLines={2}>{plant.description}</Text>
      <Text> {plant.price}</Text>
      <Button title="Description" onPress={handleBuy} />
    </View>
  );
};

export default PlantCard;
