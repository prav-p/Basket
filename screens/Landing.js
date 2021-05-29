import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, images } from "../constants";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Landing = () => {
  const navigation = useNavigation();
  const screen_width = Dimensions.get("window").width;
  return (
    <ImageBackground style={style.img} source={images.landing}>
      <View style={style.title}>
        <Text style={style.text3}>Basket</Text>
      </View>

      <View style={style.btn1}>
        <View style={style.insidebtn}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={style.text}>
              <Text
                style={{
                  paddingLeft: screen_width / 10,
                  paddingRight: screen_width / 10, // if this is changed to SCREEN_WIDTH / 21 everything works
                  fontSize: screen_width / 10,
                }}
              >
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.btn2}>
        <View style={style.insidebtn2}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Create An Account")}
          >
            <Text style={style.text2}>
              <Text
                style={{
                  paddingLeft: screen_width / 10, // if this is changed to SCREEN_WIDTH / 21 everything works
                  fontSize: screen_width / 10,
                }}
              >
                Sign Up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: "stretch",
  },
  btn1: {
    alignItems: "center",
    marginTop: hp("68%"),
  },
  insidebtn: {
    height: hp("7.5%"),
    width: wp("80%"),
    //textAlign: "center",
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  text: {
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    fontSize: RFValue(20, 896),
    color: COLORS.white,
    height: hp("7.5%"),
    width: wp("80%"),
    marginTop: "5%",
  },
  btn2: {
    alignItems: "center",
    marginTop: "10%",
  },
  insidebtn2: {
    height: hp("7.5%"),
    width: wp("80%"),
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  text2: {
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    fontSize: RFValue(20, 896),
    color: COLORS.primary,
    // paddingLeft: 30,
    // paddingRight: 30,
    height: hp("7.5%"),
    width: wp("80%"),
    marginTop: "5%",
  },
  title: {
    position: "absolute",
    top: hp("20%"),
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  text3: {
    fontFamily: "SignikaNegative-Bold",
    textAlign: "center",
    fontSize: 72,
    color: COLORS.primary,
  },
});

export default Landing;
