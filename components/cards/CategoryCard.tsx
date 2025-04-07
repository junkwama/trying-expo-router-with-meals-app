import { ViewProps } from "../Themed";
import { Category } from "@/store/types";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import MyIcon from "../ui/MyIcon";
import Colors from "@/constants/Colors";

interface categoryCardProps extends
  Omit<ViewProps, "id">,
  Category { };

export default ({ style, id, name, description, image_url }: categoryCardProps) => {

  const router = useRouter();
  const opPress = () => {
    router.push(`/meals?categoryId=${id}`)
  };

  return (
    <View style={[styles.outerContainer, style]}>
      <Pressable
        onPress={opPress}
        style={styles.innerContainer}
      >
        <Image
          source={{ uri: image_url }}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.textBlock}>
          <Text style={styles.name}>{name}</Text>
          <Text numberOfLines={2} style={styles.description}>{description}</Text>
          <Text style={styles.detailBtn}>
            Details <MyIcon
              size={12}
              name="chevron-forward-outline"
              style={{ marginStart: 4 }}
            />
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginBottom: 12
  },
  innerContainer: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "row",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: "100%",
  },
  textBlock: {
    flex: 1,
    justifyContent: "center",
    paddingStart: 20
  },
  name: {
    fontWeight: "bold",
    fontSize: 18
  },
  description: {
    fontSize: 13,
    marginBottom: 6,
    marginTop: 2
  },
  detailBtn: {
    color: Colors.primary,
    fontSize: 12,
    display: "flex",
    alignItems: "flex-end"
  }
});