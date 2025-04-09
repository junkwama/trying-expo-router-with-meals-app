import Banner from "@/components/home/Banner";
import CategoriesPreview from "@/components/home/CategoriesPreview";
import MealsPreview from "@/components/home/MealsPreview";
import sizes from "@/constants/sizes";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default () => {
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