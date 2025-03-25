import { Image, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { ScrollView } from "react-native-web";
function MealDetailsScreen({ route }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const { imageUrl, title, duration, complexity, affordability, ingredients, steps } = selectedMeal;
    return (
        <View style={styles.screen}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text>{title}</Text>
            <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
            <ScrollView style={{flex:1}}>
            <View style={styles.itemContainer}>

                <Text style={styles.title}>Ingredients</Text>
                {ingredients.map((ingredient, index) => (
                    <Text key={ingredient} style={styles.child}>{index + 1}. {ingredient}</Text>
                ))}
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.title}>Steps</Text>
                {steps.map((step, index) => (
                    <Text key={step} style={styles.child}>{index + 1}. {step}</Text>
                ))}
            </View>
            </ScrollView>
        </View>
    )

}
export default MealDetailsScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: 200,
    }
    ,
    itemContainer: {
        marginVertical: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    child: {
        fontSize: 16,
        marginVertical: 4,
    }
})