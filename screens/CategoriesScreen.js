import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
    return (
        <CategoriesGridTile title={itemData.item.title} color={itemData.item.color} />
    );
}

function CategoriesScreen() {
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