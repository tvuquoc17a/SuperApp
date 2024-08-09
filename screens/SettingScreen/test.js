<View style={{ width: width, paddingHorizontal: width * 0.05, marginTop: -width * 0.05 }}>
  {/* Inner Wrap*/}
  <View style={{ backgroundColor: "white", borderRadius: 6 }}>
    {/* Header */}
    <View style={{
      backgroundColor: "#D9EAFB", borderRadius: 6,
      paddingVertical: 4, paddingHorizontal: 8,
      flexDirection: "row", justifyContent: "space-between", alignItems: "center",
    }}>
      <Text style={{ fontWeight: "bold", color: "#00264F" }}>Thường xuyên truy cập</Text>
      <TouchableOpacity
        onPress={() => {
          console.log("clicking");
        }}
        style={{
          backgroundColor: "#2864a8",
          paddingHorizontal: 12, paddingVertical: 2,
          borderRadius: 100,
        }}
      >
        <Text style={{ color: "white", fontSize: 12 }}>Tuỳ chỉnh</Text>
      </TouchableOpacity>
    </View>
    {/* Content */}
    <View style={{
      borderRadius: 6,
      paddingVertical: 12, paddingHorizontal: 8,
      flexDirection: "row", justifyContent: "space-between",
    }}>
      {[1, 1, 1, 1].map((i) =>
        (<View style={{ width: width * 0.18, justifyContent: "center", alignItems: "center" }}>
          <Image source={iconSA} style={{ width: width * 0.1, marginBottom: width * 0.02 }} />
          <Text style={{ color: "black", textAlign: "center", fontSize: width * 0.03 }}>Thông tin cần phê duyệt</Text>
        </View>),
      )}
    </View>
  </View>

  {/* Inner Wrap*/}
  <View style={{ backgroundColor: "white", borderRadius: 6, marginTop: width * 0.05, paddingVertical: width * 0.02 }}>
    {/* Content */}
    {[1, 1, 1].map(() => (
        <View>
          <View style={{ paddingHorizontal: width * 0.05, paddingTop: width * 0.02 }}>
            <Text style={{ fontWeight: "bold" }}>Thống kê, báo cáo</Text>
          </View>
          <View style={{
            borderRadius: 6,
            paddingVertical: 12, paddingHorizontal: 8,
            flexDirection: "row", flexWrap: "wrap",
            justifyContent: "flex-start",
          }}>
            {[1, 1, 1, 1, 1, 1].map((i) =>
              (<View style={{ width: width * 0.18, justifyContent: "center", alignItems: "center" }}>
                <Image source={iconSA} style={{ width: width * 0.1, marginBottom: width * 0.02 }} />
                <Text style={{ color: "black", textAlign: "center", fontSize: width * 0.03 }}>Thông tin cần phê
                  duyệt</Text>
              </View>),
            )}
          </View>
        </View>
      ),
    )}
  </View>
</View>;
