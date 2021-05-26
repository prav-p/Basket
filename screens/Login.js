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
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("BasketDB");

const Login = () => {
  const [email, onChangeEmail] = React.useState();
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
        <Text style={styles.email}>Email</Text>
        <TextInput
          style={styles.emailInput}
          selectionColor={COLORS.secondary}
          onChangeText={onChangeEmail}
          value={email}
        />
        <Text style={styles.passwordLabel}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.passwordInput}
          selectionColor={COLORS.secondary}
          onChangeText={onChangePassword}
          value={password}
        />
      </View>
    );
  }

  function checkCred() {
    var temp = [];
    var pass = false;

    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM DataTable", [], (tx, results) => {
        // for (let i = 0; i < results.rows.length; ++i)
        //   temp.push(results.rows.item(i));
        // console.log(temp);

        // for (var i = 0; i < temp.length; ++i) {
        //   if (temp[i].email === email && temp[i].password === password) {
        //     pass = true;
        //     break;
        //   } else {
        //     pass = false;
        //   }
        // }

        // if (pass === false) {
        //   Alert.alert(
        //     "Error!",
        //     "Invalid email or password",
        //     [
        //       {
        //         text: "Ok",
        //       },
        //     ],
        //     { cancelable: false }
        //   );
        // } else {
        //   navigation.navigate("Home");
        // }
        // navigation.navigate("Home");
      });
    });

    navigation.navigate("Home");
  }

  function renderLoginButton() {
    return (
      <View style={styles.btn1}>
        <View style={styles.insidebtn}>
          <TouchableOpacity onPress={() => checkCred()}>
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

  email: {
    fontFamily: "SignikaNegative-Bold",

    fontSize: RFValue(25, 896),
    left: 20,
    top: 105,
  },

  emailInput: {
    width: wp("85%"),
    height: hp("5%"),
    left: 20,
    top: 105,
    left: 10,
    top: 115,
  },

  emailInput: {
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
    paddingLeft: 150,
    paddingRight: 150,
    paddingTop: 7,
    paddingBottom: 7,
  },
});

export default Login;
