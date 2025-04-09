import Colors from "@/constants/Colors";
import { MealsCtx } from "@/store/ctx/mealsCtx";
import { Category } from "@/store/types";
import { Link, router } from "expo-router";
import { useContext, useMemo } from "react";
import { Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import MyIcon from "../ui/MyIcon";

export default function CategoriesPreview() {

  const { categories, meals } = useContext(MealsCtx);

  const topCategories = useMemo(() => {
    return categories.sort((catA, catB) => {
      const catAMealsNumber = meals.filter(meal => meal.category_id === catA.id).length;
      const catBMealsNumber = meals.filter(meal => meal.category_id === catB.id).length;
      return catBMealsNumber - catAMealsNumber;
    }).slice(0, 6);
  }, [categories, meals]);

  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {topCategories.map(category => {
        return (
          <CategoryPreviewCard
            key={category.id}
            id={category.id}
            name={category.name}
            imageUrl={category.image_url}
          />
        );
      })}
      <Link
        href="/categories"
        style={styles.seeAllCats}
      >
        <Text style={{ marginEnd: 4 }}>See all</Text>
        <MyIcon name="chevron-forward" size={14} />
      </Link>
    </ScrollView>
  );
};

const CategoryPreviewCard = ({
  id, name, imageUrl }: {
    id: Category["id"]; name: Category["name"];
    imageUrl: Category["image_url"]
  }
) => {
  const onPress = () => {
    router.push(`/meals?categoryId=${id}`);
  };

  return (
    <Pressable
      style={styles.catContainer}
      onPress={onPress}
    >
      <Image
        source={{ uri: imageUrl }}
        resizeMode="cover"
        style={styles.catImage}
      />
      <Text numberOfLines={1} style={styles.catName}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 32
  },
  catContainer: {
    width: 65,
    marginEnd: 12
  },
  catImage: {
    width: "100%",
    height: 65,
    borderRadius: 25,
    marginBottom: 8
  },
  catName: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  },
  seeAllCats: {
    backgroundColor: "rgba(255, 77, 17, 0.3)",
    color: Colors.primary,
    height: 65,
    width: 85,
    borderRadius: 25,
    padding: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});