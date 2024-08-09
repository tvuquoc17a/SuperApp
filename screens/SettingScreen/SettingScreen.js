import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import SearchIcon from "../../assets/icons/icon_search.svg";
import BackIcon from "../../assets/icons/icon_back.svg";
import CustomButton from "../../components/CustomButton";
import { iconBroadcast, iconChart, iconEdit, iconLocation, stationSearch } from "../../assets/icons/index";


const { width, height } = Dimensions.get("window");
const recentItemCount = [1, 1, 1, 1];
const othersItemCount = [1, 2, 3, 4, 1, 2, 3];

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex : 1}}>
        <TouchableOpacity>
          <BackIcon style={{
            width: width * 0.07,
            height: width * 0.07,
            position: "absolute",
            zIndex: 20,
          }} />
        </TouchableOpacity>
        <View style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          zIndex: 10,
        }}>
          <Text style={styles.label}> TUỲ CHỈNH</Text>
        </View>
        <View style={{
          height: height * 0.047,
          width: width * 0.90,
          marginTop: height * 0.02,
          marginHorizontal: width * 0.05,
          justifyContent: "center",
        }}>
          <TextInput
            style={styles.textInput}
            placeholder={"Tìm kiếm theo chức năng"}
            placeholderTextColor={"#58adf8"}>
          </TextInput>
          <SearchIcon style={{ width: 16, height: 17, position: "absolute", right: width * 0.05 }} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Thường xuyên truy cập
          </Text>
        </View>
        <View style={styles.recentContainer}>
          {
            recentItemCount.map((value, index, array) => (
              index === 0 ? (
                  <View style={styles.buttonContainer}>
                    <CustomButton
                      IconComponent={stationSearch}
                      title={"Tra cứu theo trạm"}
                      decrease={true} />
                  </View>
                ) :
                < View style={[styles.buttonContainer, { marginLeft: width * 0.1 }]}>
                  < CustomButton
                    IconComponent={stationSearch}
                    title={"Tra cứu theo trạm"}
                    decrease={true} />
                </View>
            ))
          }
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Các chức năng khác
          </Text>
        </View>
        <View style={[styles.othersContainer, { marginTop: height * 0.003 }]}>
          {
            othersItemCount.map((value, index, array) => (
              index % 4 !== 0 ? (
                < View style={[styles.buttonContainer, { marginLeft: width * 0.1 }]}>
                  < CustomButton
                    IconComponent={iconChart}
                    title={"Tra cứu theo trạm"}
                    decrease={false} />
                </View>
              ) : (
                < View style={styles.buttonContainer}>
                  < CustomButton
                    IconComponent={iconChart}
                    title={"Tra cứu theo trạm"} />
                </View>
              )
            ))
          }
        </View>
        <View style={styles.bottomButtonContainer}>
          <View>
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={{ justifyContent: "center" }}>
                Huỷ
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={{ justifyContent: "center" }}>
              Lưu
            </Text>
          </TouchableOpacity>
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
    width: width,
    height: height * 0.02,
    textAlign: "center",
    flex: 1,

  },
  textInput: {
    borderColor: "#58ADF8",
    borderWidth: 1,
    height: height * 0.047,
    width: width * 0.90,
    paddingStart: width * 0.01,
    borderRadius: 7,

  },
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
  recentContainer: {
    flexDirection: "row",
    marginTop: height * 0.038,
    marginLeft: width * 0.065,
  },
  buttonContainer: {
    marginLeft: 0,
  },
  titleContainer: {
    marginTop: height * 0.015,
    marginLeft: width * 0.038,
  },
  othersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: width * 0.065,
  },
  title: {
    fontSize: 15,
    letterSpacing: 0,
    fontWeight: "bold",
    color: "#484848",
    textAlign: "left",
  },
  bottomButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop : height * 0.14

  },
  cancelButton: {
    width: width * 0.44,
    height: height * 0.05,
    backgroundColor: "#d7d7d7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginRight: width * 0.025,
  },
  saveButton: {
    width: width * 0.44,
    height: height * 0.05,
    backgroundColor: "#1d86cc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },


});
