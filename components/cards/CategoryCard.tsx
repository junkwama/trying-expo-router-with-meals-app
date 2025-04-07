import { LinearGradient } from "expo-linear-gradient";
import { ViewProps } from "../Themed";
import { Category } from "@/store/types";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  ViewStyle,
  Image,
  ImageBackgroundBase
} from "react-native";
import { useRouter } from "expo-router";
import sizes from "@/constants/sizes";



interface categoryCardProps extends
  Omit<ViewProps, "id">,
  Omit<Category, "description"> { };

export default ({ style, id, name, image_url, bg_color }: categoryCardProps) => {

  const router = useRouter();
  const opPress = () => {
    router.push(`/meals?categoryId=${id}`)
  };

  return (
    <View style={[styles.outerContainer, style]}>
      <Pressable
        onPress={opPress}
        style={styles.innerContainer}
        android_ripple={{ color: bg_color }}
      >
        <ImageBackground
          source={{ uri: image_url }}
          resizeMode="cover"
          style={[styles.bgImg, { backgroundColor: bg_color }]}
          imageStyle={{ marginStart: "20%" }}
        >
          <LinearGradient
            colors={["transparent", bg_color]}
            style={styles.innerContainer}
          >
            <Text style={styles.name}>{name}</Text>
          </LinearGradient>
        </ImageBackground>
      </Pressable>
    </View >
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    height: 150
  },
  innerContainer: {
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
    borderRadius: 16,
    overflow: "hidden"
  },
  bgImg: {
    flex: 1
  },
  name: {
    fontWeight: "bold",
    fontSize: 18
  }
});