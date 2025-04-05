import { Image, StyleSheet } from "react-native";

export default function CardImage({ source }: { source: any }) {
  return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
});
