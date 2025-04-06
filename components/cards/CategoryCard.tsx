import { LinearGradient } from "expo-linear-gradient";
import { ViewProps } from "../Themed";
import { Category } from "@/store/types";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  ViewStyle
} from "react-native";
import { useRouter } from "expo-router";
import sizes from "@/constants/sizes";



interface categoryCardProps extends
  Omit<ViewProps, "id">,
  Omit<Category, "description"> {
  innerStyle: ViewStyle
};

export default ({ style, innerStyle, id, name, image_url, bg_color }: categoryCardProps) => {

  const router = useRouter();
  const opPress = () => {
    router.push(`/meals?category=${id}`)
  };

  return (
    <View style={[styles.outerContainer, style]}>
      <ImageBackground
        source={{ uri: image_url }}
        resizeMode="cover"
        style={[styles.innerBgImageContainer, innerStyle]}
      >
        <LinearGradient
          colors={["transparent", bg_color]}
          style={{ flex: 1 }}
        >
          <Pressable
            onPress={opPress}
            style={styles.pressable}
            android_ripple={{ color: bg_color }}
          >
            <Text style={styles.name}>{name}</Text>
          </Pressable>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    height: sizes.cardHeight
  },
  innerBgImageContainer: {
    elevation: 5,
    shadowColor: "black",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    // ---
    flex: 1,
    borderRadius: sizes.gap,
    overflow: "hidden"
  },
  pressable: {
    flex: 1,
    justifyContent: "flex-end",
    padding: sizes.gap
  },
  name: {
    fontWeight: "bold",
    fontSize: 18
  }
});