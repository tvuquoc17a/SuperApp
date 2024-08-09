import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import IconDecrease from "../assets/icons/icon_decrease.svg";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const CustomButton = ({ IconComponent, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={{alignItems : 'center'}}>
          <View style={{ backgroundColor: "red" }}>
            <IconComponent style={{ width: width * 0.12, height: height * 0.1 }} />
          </View>
          <TouchableOpacity style={styles.extraButton}>
            <IconDecrease style={{width : 25, height : 25}} />
          </TouchableOpacity>
        </View>
        <View style={{maxWidth : width * 0.223}}>
          <Text style={styles.text}> {title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'blue'
  },
  extraButton: {
    position: "absolute",
    top: 6,
    right: 9,
  },
  text : {
    textAlign : 'center'
  }

});
