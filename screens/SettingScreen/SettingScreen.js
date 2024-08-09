import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import SearchIcon from "../../assets/icons/icon_search.svg";
import CustomButton from "../../components/CustomButton";
import { iconBroadcast, iconChart, iconEdit, iconLocation, stationSearch } from "../../assets/icons/index";


const  {width, height} = Dimensions.get('window')

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Text style={styles.label}> TUỲ CHỈNH</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={"Tim kiem chuc nang"}
            placeholderTextColor={"58adf8"} />
          <SearchIcon style={{ width: 16, height: 17 }} />
        </View>
        <View>
          <Text style={styles.title}>
            Thường xuyên truy cập
          </Text>
        </View>
        <View style={styles.recentContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton
              IconComponent={stationSearch}
              title={"Tra cứu theo trạmhghgvjhgjgkjhg"} />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              IconComponent={stationSearch}
              title={"Tra cuu theo trạm"} />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              IconComponent={stationSearch}
              title={"Tra cứu theo bản đồ"} />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              IconComponent={stationSearch}
              title={"Thống kê công việc"} />
          </View>
        </View>

      </SafeAreaView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  label: {
    fontFamily: "Inter-Bold",
    color: "#1961ad",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  textInput: {},
  searchContainer: {
    borderWidth: 1,
    borderColor: "58adf8",
    marginTop: 17,
    marginHorizontal: 0.05 * width,
    paddingHorizontal: 10,
    width: 0.9 * width,
    height: height * 0.05,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  recentContainer :{
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginHorizontal : width * 0.07,
    borderWidth : 1
  },
  buttonContainer : {
    backgroundColor : 'green'

  }

});
