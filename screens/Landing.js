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

const Landing = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground style={style.img} source={images.landing}>
      <View style={style.title}>
        <Text style={style.text3}>Basket</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={style.btn1}>
          <View style={style.insidebtn}>
            <Text style={style.text}>Login</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Create An Account")}
      >
        <View style={style.btn2}>
          <View style={style.insidebtn2}>
            <Text style={style.text2}> Create An Account</Text>
          </View>
        </View>
      </TouchableOpacity>
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
    top: 560,
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
    textAlign: "center",
    fontSize: 30,
    color: COLORS.white,
  },
  btn2: {
    alignItems: "center",
    top: 600,
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
    fontSize: 30,
    color: COLORS.primary,
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
