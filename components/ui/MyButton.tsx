import { ComponentProps } from "react";
import {
  View, Text, StyleSheet, Pressable,
  ViewProps, TextStyle, ButtonProps
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/constants/Colors";
import MyIcon from "./MyIcon";

interface MyButtonProps extends ViewProps, ButtonProps {
  lableStyle?: TextStyle,
  iconName?: ComponentProps<typeof Ionicons>["name"]
}

export default function MyButton({ style, title, onPress, lableStyle, iconName }: MyButtonProps) {
  return (
    <View style={[styles.container, style]}>
      <Pressable style={styles.innerContainer} onPress={onPress}>
        <Text style={[styles.lable, lableStyle]}>{title}</Text>
        {!!iconName ? <MyIcon color={lableStyle?.color} name={iconName} /> : null}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: 4,
    borderRadius: 8,
    overflow: "hidden",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  lable: {
    color: "white",
    fontWeight: "500"
  }
});