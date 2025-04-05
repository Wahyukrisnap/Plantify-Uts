import { Pressable, Text, StyleSheet } from "react-native";

export default function Button({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#66BB6A",
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
