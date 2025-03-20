import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGridTile from "../components/CategoryGridTile";

// outer function
function CategoriesScreen({ navigation }) {
    // inner function
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview');
        }
        return (
            <CategoriesGridTile onPress={pressHandler} title={itemData.item.title} color={itemData.item.color} />
        );
    }
    // outer function body
    return (<FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
    />);
}
export default CategoriesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
});