import { View, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "react-native-web";

export default function App() {
  return (
 <>
  <StatusBar style="auto" />
  <CategoriesScreen/>
 </>
  );
}
