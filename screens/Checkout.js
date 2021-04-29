import React from "react";
import { COLORS, FONTS, icons } from "../constants";
import { IconButton } from "../components";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Icon,
  Keyboard,
  FlatList,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";

const Checkout = () => {
  const navigation = useNavigation();
  function renderHeader() {
    return (
      <SafeAreaView
        style={{
          height: 150,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 30,
            alignItems: "center",
            height: 25,
            wdith: 25,
          }}
        >
          {/* Return Button */}

          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <IconButton icon={icons.goBack} />
          </TouchableOpacity>

          {/* Title */}
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.h1,
                fontSize: 37,
                top: 4,
              }}
            >
              Basket
            </Text>
          </View>
          {/* Empty View */}
          <View style={{ width: 25 }}></View>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      {renderHeader()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Checkout;
