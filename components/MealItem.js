import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability ,id}) {
    // console.log(props);
    const navigation = useNavigation();
    const onPress = (id) => {
        navigation.navigate('MealDetails', { mealId: id });
    }
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc' }}
            style={({ pressed }) => ( pressed ? styles.buttonPressed:null)}
            onPress={()=>onPress(id)}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsITem}>{duration}m</Text>
                        <Text style={styles.detailsITem}>{complexity?.toUpperCase()}</Text>
                        <Text style={styles.detailsITem}>{affordability?.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}
export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    }
    ,
    innerContainer: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.75,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 8,
    },
    detailsITem: {
        fontSize: 12,
        marginHorizontal: 4,

    }
});

