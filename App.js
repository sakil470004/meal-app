import { View, Text, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from "./screens/FavoritesScreen";
import {Ionicons} from '@expo/vector-icons';
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
              backgroundColor: "skyblue",
            },
            headerTintColor: "#ff0000",
            sceneStyle: {
              backgroundColor: "lightgray",
            },
            
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} 
        options={{
          title: 'Meal Categories',
          drawerIcon:({color,size})=>{return <Ionicons name='fast-food' size={size} color={color}/>}
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} 
        options={{
          title: 'Favorites',
          drawerIcon:({color,size})=>{return <Ionicons name='star' size={size} color={color}/>}
        }}
      />
    </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "skyblue",
            },
            headerTintColor: "#ff0000",
            contentStyle: {
              backgroundColor: "lightgray",
            },
          }}
        >
          <Stack.Screen name="Drawer" component={DrawerNavigator}
            options={{
              headerShown: false,
            }
            }
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
          />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen}
          options={{
            title: 'About the Meal',
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
