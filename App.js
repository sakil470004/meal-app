import { View, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "skyblue",
            },
            headerTintColor: "#ff0000",
            contentStyle: {
              backgroundColor: "steelblue",
            },
          }}
        >
          <Stack.Screen name="MealsCategories" component={CategoriesScreen}
            options={{
              title: "All Categories",

            }
            }
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   }
            // }
            // }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
