import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, images } from "../constants";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Landing = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground style={style.img} source={images.landing}>
      <View style={style.title}>
        <Text style={style.text3}>Basket</Text>
      </View>

      <View style={style.btn1}>
        <View style={style.insidebtn}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={style.text}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.btn2}>
        <View style={style.insidebtn2}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Create An Account")}
          >
            <Text style={style.text2}> Create An Account</Text>
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
    marginTop: "150%",
  },
  insidebtn: {
    height: 62,
    width: 362,
    textAlign: "center",
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  text: {
    fontFamily: "SignikaNegative-Bold",
    left: -10,
    textAlign: "center",
    fontSize: RFValue(20, 580),
    color: COLORS.white,
    paddingLeft: 150,
    paddingRight: 150,
    paddingTop: 7,
    paddingBottom: 7,
  },
  btn2: {
    alignItems: "center",
    marginTop: "10%",
  },
  insidebtn2: {
    height: 62,
    width: 362,
    textAlign: "center",
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  text2: {
    fontFamily: "SignikaNegative-Bold",
    textAlign: "center",
    fontSize: RFValue(19, 580),
    color: COLORS.primary,
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 7,
    paddingBottom: 7,
  },
  title: {
    position: "absolute",
    top: 178,
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
