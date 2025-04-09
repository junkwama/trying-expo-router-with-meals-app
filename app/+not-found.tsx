import FallBackScreeen from "@/components/screens/FallbackScreen";
import { router } from "expo-router";

export default () => {
  return (
    <FallBackScreeen
      title="Page not found"
      btnTitle="Go to Home Page"
      onBtnPress={() => { router.replace("/"); }}
    />
  );
};
