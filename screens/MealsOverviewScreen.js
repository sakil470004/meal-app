import { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet, FlatList } from "react-native";

function MealsOverviewScreen({ route, navigation }) {
    const categoryId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.includes(categoryId));

    useLayoutEffect(() => {   
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryId, navigation]);

    function renderMealItem(itemData) {
        const mealItemProps={
            title:itemData.item.title,
            imageUrl:itemData.item.imageUrl,
            duration:itemData.item.duration,
            complexity:itemData.item.complexity,
            affordability:itemData.item.affordability,
            id:itemData.item.id,
        }

        return (
           <MealItem {...mealItemProps}/>
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
        padding: 8, 
    },
});