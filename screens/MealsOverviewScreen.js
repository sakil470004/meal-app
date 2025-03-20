import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet, FlatList } from "react-native";

function MealsOverviewScreen({ route }) {
    const categoryId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.includes(categoryId));

    function renderMealItem(itemData) {
        return (
           <MealItem itemData={itemData} />
        );
    }

    return (
        <View style={styles.screen}>
           <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    );
}
export default MealsOverviewScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16, 
    },
});