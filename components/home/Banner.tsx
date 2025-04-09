import { router } from "expo-router";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import sizes from "@/constants/sizes";
import Colors from "@/constants/Colors";
import MyButton from "../ui/MyButton";

export default () => {
  return (
    <ImageBackground style={styles.container}>
      <Text style={styles.txt1}>Use <Text style={styles.txtPromoCode}>FIRST50</Text> code at checkout.{"\n"}Harry, offers end soon!</Text>
      <Text style={styles.txt2}>Get 50% Off{"\n"}Your First Order!</Text>
      <View>
        <MyButton
          title="Order now"
          lableStyle={styles.orderBtnLabel}
          style={styles.orderBtn}
          onPress={() => { router.push("/categories") }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    overflow: "hidden",
    height: sizes.cardHeight,
    borderRadius: 24,
    padding: sizes.padding,
    justifyContent: "space-evenly"
  },
  txt1: {
    color: "white",
    fontSize: 11
  },
  txt2: {
    color: "white",
    fontWeight: "500",
    fontSize: 18
  },
  txtPromoCode: {
    color: Colors.primary,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    lineHeight: 20,
    backgroundColor: "white"
  },
  orderBtn: {
    backgroundColor: "black",
    alignSelf: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16
  },
  orderBtnLabel: {
    color: Colors.secondary,
    fontSize: 12
  }
});