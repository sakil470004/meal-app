import {Ionicons} from '@expo/vector-icons'
import { Pressable, StyleSheet } from 'react-native';
function IconButton({ onClick , icon, color }) {
  return (
    <Pressable 
    onPress={onClick}
    style={({pressed})=>pressed && styles.pressed}
    >
        <Ionicons name={icon} size={24} color={color}/>
    </Pressable>
  );
}
export default IconButton;

const styles = StyleSheet.create({
pressed:{
    opacity:0.7
}
});