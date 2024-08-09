import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import IconDecrease from "../assets/icons/icon_decrease.svg";
import IconAdd from '../assets/icons/icon_add.svg'
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const CustomButton = ({ IconComponent, title, decrease }) => {
  return (
    <View style={styles.container}>
      {
        decrease === true ? (
          <TouchableOpacity>
            <View style={{ alignItems: "center" }}>
              <View>
                <IconComponent style={{ width: width * 0.06, height: height * 0.05 }} />
              </View>
              <TouchableOpacity style={styles.extraButton}>
                <IconDecrease style={{ width: width * 0.04, height: width * 0.04 }} />
              </TouchableOpacity>
            </View>
            <View style={{ maxWidth: width * 0.223 }}>
              <Text style={styles.text}> {title}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <View style={{ alignItems: "center" }}>
              <View>
                <IconComponent style={{ width: width * 0.06, height: height * 0.05 }} />
              </View>
              <TouchableOpacity style={styles.extraButton}>
                <IconAdd style={{ width: width * 0.04, height: width * 0.04 }} />
              </TouchableOpacity>
            </View>
            <View style={{ maxWidth: width * 0.223 }}>
              <Text style={styles.text}> {title}</Text>
            </View>
          </TouchableOpacity>
        )
      }

    </View>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: width * 0.14,
  },
  extraButton: {
    position: "absolute",
    top: 6,
    right: 6,
  },
  text: {
    textAlign: "center",
  },
});
