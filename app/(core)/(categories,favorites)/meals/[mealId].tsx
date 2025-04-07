import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from 'expo-router';

const MealDeatailsRoute = () => {

  const { mealId } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>MealDeatailsRoute</Text>
      <Text>Id: {mealId}</Text>
    </View>
  );
};

export default MealDeatailsRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});