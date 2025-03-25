import {View,Text, StyleSheet} from 'react-native';
function MealDetails({duration,complexity,affordability,style}) {
    return (
        <View style={[styles.details,style]}>
            <Text style={styles.detailsITem}>{duration}m</Text>
            <Text style={styles.detailsITem}>{complexity?.toUpperCase()}</Text>
            <Text style={styles.detailsITem}>{affordability?.toUpperCase()}</Text>
        </View>
    )
}
export default MealDetails;

const styles = StyleSheet.create({
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
})