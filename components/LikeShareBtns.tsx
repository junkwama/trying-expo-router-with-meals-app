import { View, StyleSheet, ViewStyle, ButtonProps } from "react-native";
import MyIcon, { MyIconProps } from "./ui/MyIcon";
import Colors from "@/constants/Colors";

interface LikeShareBtnsTtype {
  style?: ViewStyle;
  isKiked?: boolean;
  onLike?: ButtonProps["onPress"];
  onShare?: ButtonProps["onPress"];
  size?: number;
}

export default ({ style, onLike, onShare, size = 24 }: LikeShareBtnsTtype) => {
  return (
    <View style={[styles.container, style]}>
      <MyIcon
        name="share-outline"
        onPress={onLike}
        size={size}
        style={[styles.icon, { marginEnd: 8 }]}
        color={Colors.primary}
      />
      <MyIcon
        name="heart-outline"
        onPress={onShare}
        size={size}
        style={styles.icon}
        color={Colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon: {
    backgroundColor: "rgba(256, 256, 256, 0.7)",
    padding: 6,
    borderRadius: "100%"

  }
});