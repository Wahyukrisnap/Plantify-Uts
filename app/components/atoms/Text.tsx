import { Text as RNText } from "react-native";

export default function Text({ children }: { children: React.ReactNode }) {
  return (
    <RNText style={{ fontSize: 18, marginVertical: 8, color: "#2E7D32" }}>
      {children}
    </RNText>
  );
}
