import WrapperCard from "@/components/cards/WrapperCard";
import MyIcon from "@/components/ui/MyIcon";
import sizes from "@/constants/sizes";
import { Ionicons } from "@expo/vector-icons";
import { Link, LinkProps } from "expo-router";
import { ComponentProps } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <WrapperCard>
        <MenuItem href="/categories" title="Meals" iconName="fast-food-outline" />
        <MenuItem href="/favorites" title="Favorite meals" iconName="heart-outline" />
      </WrapperCard>
      <WrapperCard>
        <MenuItem href="/users/12" title="My account" iconName="person-circle-outline" />
        <MenuItem href="/settings" title="Settings" iconName="settings-outline" />
        <MenuItem href="/help" title="Need help" iconName="help-circle-outline" />
        <MenuItem href="/feedback" title="Repport a problem" iconName="alert-circle-outline" />
      </WrapperCard>

      <WrapperCard>
        <MenuItem href="/about" title="About us" iconName="information-circle-outline" />
        <MenuItem href="/auth" title="Log out" iconName="log-out-outline" />
      </WrapperCard>
    </ScrollView>
  );
};

interface MenuItemProps extends LinkProps {
  iconName: ComponentProps<typeof Ionicons>["name"];
  title: string;
}

const MenuItem = ({ style, href, iconName, title }: MenuItemProps) => {
  return (
    <Link
      style={[itemStyles.container, style]}
      href={href}
    >
      <Text style={itemStyles.block1}>
        <MyIcon name={iconName} />
        <Text style={itemStyles.title}>{title}</Text>
      </Text>
      <MyIcon name="chevron-forward" size={20} />
    </Link>
  );
};

const itemStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0, .4)"
  },
  block1: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    fontSize: 20
  },
  title: {
    paddingStart: 20
  }
});

const styles = StyleSheet.create({
  container: {
    padding: sizes.padding
  }
});