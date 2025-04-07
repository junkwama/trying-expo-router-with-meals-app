import { ViewProps } from "../Themed";
import { Meal } from "@/store/types";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground
} from "react-native";
import { useRouter } from "expo-router";
import MyIcon from "../ui/MyIcon";
import Colors from "@/constants/Colors";

interface mealCardProps extends
  Omit<ViewProps, "id">,
  Pick<Meal, "id" | "name" | "image_url" | "nutritional_information"> {
  category: string;
};

export default ({
  style,
  id,
  category,
  name,
  image_url,
  nutritional_information
}: mealCardProps) => {

  const router = useRouter();
  const opPress = () => {
    router.push(`/meals/${id}`)
  };

  const { calories, fat, protein } = nutritional_information;

  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={opPress}
        style={styles.pressable}
        android_ripple={{ color: "black" }}
      >
        <ImageBackground
          source={{ uri: image_url }}
          resizeMode="cover"
          style={styles.imageBlock}
        >
          <MyIcon
            name="heart-outline"
            style={styles.likeBtn}
            size={18}
            color={Colors.primary}
          />
          <Text style={styles.category}>{category}</Text>
        </ImageBackground>
        <View style={styles.textBlock}>
          <Text numberOfLines={2} style={styles.name}>{name}</Text>
          <Text style={styles.nutrition_informations}>
            {`${calories} cal, ${fat} fat, ${protein} protein`}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    shadowColor: "black",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
    // ---
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden"
  },
  pressable: {
    flex: 1,
  },
  imageBlock: {
    height: 120,
    padding: 12,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  likeBtn: {
    backgroundColor: "white",
    padding: 6,
    borderRadius: "50%",
    alignSelf: "flex-end"
  },
  category: {
    backgroundColor: "white",
    borderRadius: 16,
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    fontWeight: "500",
  },
  textBlock: {
    padding: 12
  },
  name: {
    fontWeight: "500"
  },
  nutrition_informations: {
    color: Colors.primary,
    fontSize: 11,
    paddingVertical: 4
  }

});
