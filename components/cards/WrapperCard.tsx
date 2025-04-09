import { View, Text, StyleSheet, ViewProps } from "react-native";



export default function WrapperCard(
  { style, title, children }: ViewProps & { title?: string; }
) {
  return (
    <View style={[styles.container, style]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ebeae8",
    padding: 18,
    borderRadius: 16,
    marginTop: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 18
  }
});