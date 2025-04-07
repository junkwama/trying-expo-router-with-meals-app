import { View, Text, StyleSheet, ViewProps } from "react-native";

interface StepCardProps extends ViewProps {
  stepId: number,
  description: string
}

export default function StepCard({ style, stepId, description }: StepCardProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Step {stepId}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.bulb}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    borderStartWidth: 2,
    borderStartColor: "#a3a3a3",
    paddingStart: 24
  },
  bulb: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#a3a3a3",
    position: "absolute",
    left: -9
  },
  title: {
    fontWeight: "500",
    fontSize: 15,
  },
  description: {
    marginVertical: 16
  },
});