import React from "react";
import { COLORS } from "../constants";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Login = () => {
  const [username, onChangeUsername] = React.useState();
  const [password, onChangePassword] = React.useState();
  const navigation = useNavigation();

  function renderLogin() {
    return (
      <View>
        <Text style={styles.loginText}>LOGIN</Text>
      </View>
    );
  }

  function renderLoginImage() {
    return (
      <View>
        <Image
          style={styles.loginImage}
          source={require("../assets/images/LoginImage.png")}
        />
      </View>
    );
  }

  function renderLoginInq() {
    return (
      <View>
            <Text style={styles.userName}>Username</Text>
            <TextInput
                style={styles.userNameInput}
                onChangeText={onChangeUsername}
                value={username}
            />
            <Text style={styles.passwordLabel}>Password</Text>
            <TextInput
                secureTextEntry={true}
                style={styles.passwordInput}
                onChangeText={onChangePassword}
                value={password}
            />
      </View>
    );
  }

  function renderLoginButton() {
    return (
      <View style={styles.btn1}>
        <View style={styles.insidebtn}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          {renderLogin()}
          {renderLoginImage()}
          {renderLoginInq()}
          {renderLoginButton()}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  loginText: {
    top: 40,
    fontFamily: "SignikaNegative-Bold",
    textAlign: "center",

    fontSize: RFValue(80, 896),

    color: COLORS.primary,
  },

  loginImage: {
    width: wp("50%"),
    height: hp("24%"),
    left: 90,
    top: 70,
  },

  userName: {
    fontFamily: "SignikaNegative-Bold",

    fontSize: RFValue(25, 896),
    left: 20,
    top: 105,
  },

  userNameInput: {
    width: wp("85%"),
    height: hp("5%"),
    left: 20,
    top: 105,
    left: 10,
    top: 115,
  },

  userNameInput: {
    width: wp("90%"),
    height: hp("5%"),
    left: 10,
    top: 115,
    fontSize: RFValue(30, 896),
    backgroundColor: "#FF9E45",
    borderRadius: 10,
    fontFamily: "SignikaNegative-Regular",
  },

  passwordLabel: {
    fontFamily: "SignikaNegative-Bold",

    fontSize: RFValue(26, 896),
    left: 20,
    top: 150,
  },

  passwordInput: {
    width: wp("85%"),
    height: hp("5%"),
    left: 20,
    top: 150,
    left: 10,
    top: 160,
  },

  passwordInput: {
    width: wp("90%"),
    height: hp("5%"),
    left: 10,
    top: 160,
    fontSize: RFValue(30, 896),
    backgroundColor: "#FF9E45",
    borderRadius: 10,
    fontFamily: "SignikaNegative-Regular",
  },

  btn1: {
    flex: 1,
    alignItems: "center",
    marginTop: "60%",
  },

  insidebtn: {
    height: hp("7.5%"),
    width: wp("95%"),
    textAlign: "center",
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  text: {
    fontFamily: "SignikaNegative-Bold",
    textAlign: "center",
    fontSize: RFValue(40, 896),
    fontSize: RFValue(30, 896),
    color: COLORS.white,
    paddingLeft: 140,
    paddingRight: 150,
    paddingTop: 7,
    paddingBottom: 7,
  },
});

export default Login;
