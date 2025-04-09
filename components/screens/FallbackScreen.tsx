import sizes from "@/constants/sizes";
import MyButton from "@/components/ui/MyButton";
import MyIcon from "@/components/ui/MyIcon";
import { View, Text, StyleSheet, ButtonProps } from "react-native";

export default function FallBackScreeen(
  { title, btnTitle, onBtnPress }: {
    title: string,
    btnTitle: string;
    onBtnPress: ButtonProps["onPress"]
  }) {
  return (
    <View style={styles.container}>
      <MyIcon
        name="fast-food-outline"
        size={64}
      />
      <Text style={styles.text}>{title}</Text>
      <MyButton
        title={btnTitle}
        style={styles.button}
        onPress={onBtnPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.padding,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
    marginVertical: 16,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 16
  }
});