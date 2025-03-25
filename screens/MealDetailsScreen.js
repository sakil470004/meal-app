import { useContext, useLayoutEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailsScreen({ route, navigation }) {
    const mealId = route.params.mealId;
    const favoriteMealsCtx = useContext(FavoritesContext);

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const { imageUrl, title, duration, complexity, affordability, ingredients, steps } = selectedMeal;
    
    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    function changeFavStatusHandler() {
        if (mealIsFavorite) {
            favoriteMealsCtx.removeFavorite(mealId);
        } else {
            favoriteMealsCtx.addFavorite(mealId);
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton onClick={changeFavStatusHandler}
                    icon={mealIsFavorite ? 'star' : 'star-outline'}
                    color='white'
                />
            )
        })
    }, [navigation, changeFavStatusHandler]);

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.screen}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <Text style={styles.name}>{title}</Text>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                {/* <ScrollView style={{flex:1}}> */}
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
            </View>

        </ScrollView>
    )

}
export default MealDetailsScreen;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,

    },
    screen: {
        flex: 1,
        padding: 16,
        backgroundColor: 'lightgray',
        paddingBottom: 50,

    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 8,
    }
    ,
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 8,
    },
    itemContainer: {
        marginVertical: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 8,
        marginVertical: 8,
    },
    child: {
        fontSize: 16,
        marginVertical: 6,
    }
})