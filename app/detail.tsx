// app/detail.tsx
import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";

const Detail = () => {
  const { plant } = useLocalSearchParams();

  // params berupa string, kita harus parse kembali
  const parsedPlant = typeof plant === "string" ? JSON.parse(plant) : plant;

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Image
        source={parsedPlant.image}
        style={{ width: "100%", height: 250, borderRadius: 12 }}
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 10 }}>
        {parsedPlant.name}
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        {parsedPlant.description}
      </Text>
      <Text style={{ fontSize: 18, fontWeight: "600" }}>
        {parsedPlant.price}
      </Text>
    </ScrollView>
  );
};

export default Detail;
