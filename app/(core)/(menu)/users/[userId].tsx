import { View, Text, StyleSheet } from "react-native";

export default function UserProfile() {
  return (
    <View style={styles.container}>
      <Text>User profile Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});