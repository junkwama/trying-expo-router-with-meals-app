import Colors from "@/constants/Colors";
import { View, StyleSheet } from "react-native";

export default () => {
  return (
    <View style={styles.designBlock}>
      <View style={styles.designInnerBlock}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  designBlock: {
    backgroundColor: Colors.primary,
    justifyContent: "flex-end",
    height: 25,
  },
  designInnerBlock: {
    backgroundColor: "#f2f2f2",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    height: 25
  }
});