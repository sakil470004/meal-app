import { Pressable, Text, View } from "react-native";

function CategoriesGridTile({title,color}) {
  return (
    <View>
        <Pressable>
            <View>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>
  );
}
export default CategoriesGridTile;