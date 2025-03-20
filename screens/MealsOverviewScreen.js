import { MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet } from "react-native";

function MealsOverviewScreen({ route }) {
    const categoryId = route.params.categoryId;
    return (
        <View style={styles.screen}>
            <Text>MealsOverViewScreen {categoryId}</Text>
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