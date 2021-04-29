import React from "react";
import { COLORS, FONTS, icons } from "../constants";
import { IconButton } from "../components";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
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

const Checkout = (navigation) => {
  function renderHeader() {
    return (
      <SafeAreaView
        style={{
          height: 120,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 30,
            alignItems: "center",
          }}
        >
          {/* Return Button */}
          <IconButton icon={icons.Back} onPress={() => navigation.goBack()} />

          {/* Title */}
          <View
            style={{
              flex: 2,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.h1,
                fontSize: 40,
                height: 10,
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
