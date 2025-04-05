import { View, StyleSheet, ScrollView } from "react-native";
import HomePages from "../components/pages/HomePages";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HomePages />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F3F9F1",
  },
});
