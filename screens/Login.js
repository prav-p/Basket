import React from "react";
import { COLORS } from "../constants";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Login = () => {
  const [text, onChangeText] = React.useState();
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
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={styles.passwordLabel}>Password</Text>
        <TextInput
          style={styles.passwordInput}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    );
  }

  function renderLoginButton() {
    <View style={styles.btn1}>
      <View style={styles.insidebtn}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.text}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>;
  }

  return (
    <SafeAreaView>
      {renderLogin()}
      {renderLoginImage()}
      {renderLoginInq()}
      {renderLoginButton()}
    </SafeAreaView>
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

    fontSize: RFValue(40, 580),

    color: COLORS.primary,
  },

  loginImage: {
    width: 246,
    height: 225,
    left: 84,
    top: 60,
  },

  userName: {
    fontFamily: "SignikaNegative-Bold",

    fontSize: RFValue(15, 580),

    left: 35,
    top: 100,
  },

  userNameInput: {
    width: 350,
    height: 50,
    left: 35,
    top: 105,
    fontSize: 20,
    backgroundColor: "#FF9E45",
    borderRadius: 22,
    fontFamily: "SignikaNegative-Regular",
  },

  passwordLabel: {
    fontFamily: "SignikaNegative-Bold",

    fontSize: RFValue(15, 580),

    left: 35,
    top: 120,
  },

  passwordInput: {
    width: 350,
    height: 50,
    left: 35,
    top: 125,
    fontSize: 20,
    backgroundColor: "#FF9E45",
    borderRadius: 22,
    fontFamily: "SignikaNegative-Regular",
  },

  btn1: {
    flex: 1,
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
    textAlign: "center",
    fontSize: 30,
    color: COLORS.white,
    paddingLeft: 150,
    paddingRight: 150,
    paddingTop: 7,
    paddingBottom: 7,
  },
});

export default Login;
