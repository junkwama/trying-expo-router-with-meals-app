import MealsOverviewScreen from "@/components/screens/MealsOverviewScreen";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import { MealsCtx } from "@/store/ctx/mealsCtx";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useContext, useEffect } from "react";
import sizes from "@/constants/sizes";

const MealsOverviewRoute = () => {

  const navigation = useNavigation();
  const { categories } = useContext(MealsCtx);
  let { categoryId } = useLocalSearchParams();

  categoryId = categoryId?.[0] || categoryId;
  const category = categories.find(cat => {
    return cat.id.toString() === categoryId;
  });

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={{
        backgroundColor: "rgba(256, 256, 256, 0.7)",
        paddingVertical: 6,
        paddingHorizontal: 32,
        fontSize: 18,
        borderRadius: 18
      }}>{category?.name}</Text>
    });
  }, [categoryId]);

  return (
    <ScrollView style={styles.container}>

      <View style={styles.catBlock}>
        <Image
          source={{ uri: category?.image_url }}
          resizeMode="cover"
          style={styles.catImg}
        />
        <View style={styles.catTxt}>
          <Text style={styles.catTxtName}>{category?.name}</Text>
          <Text>{category?.description}</Text>
        </View>
      </View>

      <View style={styles.mealsBlock}>
        <MealsOverviewScreen />
      </View>
    </ScrollView>
  );
};

export default MealsOverviewRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  catBlock: {

  },
  catImg: {
    height: 220
  },
  catTxt: {
    padding: sizes.padding
  },
  catTxtName: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 12
  },
  mealsBlock: {
    padding: sizes.padding
  },

});