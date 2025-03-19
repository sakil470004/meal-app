import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function CategoriesGridTile({ title, color }) {
    return (
        <View style={styles.gridItem}>
            <Pressable android_ripple={{color:'#ccc'}} style={({pressed})=>[styles.button,pressed && styles.buttonPressed]}>
                <View style={[styles.innerContainer,{backgroundColor:color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}
export default CategoriesGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        backgroundColor: 'white',
        overflow: Platform.OS==='android' ? 'hidden' : 'visible',
    },
    button:{
        flex:1,
    },
    buttonPressed:{
        opacity:0.5,
    },
    innerContainer:{
        flex: 1,
        padding:16,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
    }

});