import { use, useContext } from "react";
import { Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector } from "react-redux";
import Meal from "../models/meal";
import { MEALS } from "../data/dummy-data";
function FavoritesScreen() {
// const favContext = useContext(FavoritesContext);
const favIds=useSelector((state)=>state.favoriteMeals.ids);
if (favIds.length === 0 || !favIds) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>No favorites added yet!</Text>
    </View>
  );
}
// to get the meals from the MEALS array that are in the favorites list as order in added
const favItems= favIds.map((id) => MEALS.find((meal) => meal.id === id));
// order by name or object property
// const favItems=MEALS.filter((meal)=>favContext.ids.includes(meal.id));
  return (
<MealsList items={favItems} />
  );
}
export default FavoritesScreen;