import sizes from "@/constants/sizes";
import { StyleSheet, ScrollView } from "react-native";
import Banner from "@/components/home/Banner";
import CategoriesPreview from "@/components/home/CategoriesPreview";
import MealsPreview from "@/components/home/MealsPreview";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Banner />
      <CategoriesPreview />
      <MealsPreview />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.padding
  }
});