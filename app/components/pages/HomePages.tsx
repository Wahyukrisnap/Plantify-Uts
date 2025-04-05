import { View, Text, StyleSheet } from "react-native";
import PlantList from "../organisms/PlantList";

export default function HomePages() {
  return (
    <View>
      <Text style={styles.title}>🌿 Welcome to Plantify!</Text>
      <PlantList />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2E7D32",
  },
});
