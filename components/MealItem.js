import { Text, View } from "react-native";

function MealItem(props){
    return(
        <View>
            <Text>{props.itemData.title}</Text>
        </View>
    )
}
export default MealItem;

