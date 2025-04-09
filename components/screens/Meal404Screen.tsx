import sizes from "@/constants/sizes";
import { View, Text, StyleSheet } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <Text>No meal found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: sizes.padding
  }
});