import { Text, View } from "react-native";

function MealDetailsScreen({route,navigation}){
    const mealId = route.params.mealId;
    return(
        <View>
            <Text>Meal Details {mealId}</Text>
        </View>
    )

}
export default MealDetailsScreen;