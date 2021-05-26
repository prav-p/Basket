import React from "react";
import { COLORS } from "../constants";
import * as SQLite from "expo-sqlite";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const db = SQLite.openDatabase("BasketDB");

const createAccount = () => {
  const [name, onChangeName] = React.useState();
  const [email, onChangeEmail] = React.useState();
  const [password, onChangePassword] = React.useState();
  const [rePassword, onChangeRePassword] = React.useState();
  const [address, onChangeAddress] = React.useState();
  const [zipcode, onChangeZipcode] = React.useState();
  const [city, onChangeCity] = React.useState();
  const [contactNo, onChangeContactNo] = React.useState();
  const navigation = useNavigation();

  let [flatListItems, setFlatListItems] = React.useState([]);

  let create_account = () => {
    if (name === undefined || name === "") {
      Alert.alert(
        "Error!",
        "Please enter your name",
        [
          {
            text: "Ok",
          },
        ],
        { cancelable: false }
      );
    } else if (email === undefined || email === "") {
      Alert.alert(
        "Error!",
        "Please enter your email",
        [
          {
            text: "Ok",
          },
        ],
        { cancelable: false }
      );
    } else if (
      !email.includes("@") ||
      email.substring(email.length - 4) !== ".com"
    ) {
      Alert.alert(
        "Error!",
        "Invalid email",
        [
          {
            text: "Ok",
          },
        ],
        { cancelable: false }
      );
    } else if (password === undefined || password === "") {
      Alert.alert(
        "Error!",
        "Please enter password",
        [
          {
            text: "Ok",
          },
        ],
        { cancelable: false }
      );
    } else if (password.length < 8) {
      Alert.alert(
        "Error!",
        "Password must be at least 8 characters",
        [
          {
            text: "Ok",
          },
        ],
        { cancelable: false }
      );
    } else if (
      rePassword === undefined ||
      rePassword === "" ||
      rePassword !== password
    ) {
      Alert.alert(
        "Error!",
        "Password does not match",
        [
          {
            text: "Ok",
          },
        ],
        { cancelable: false }
      );
    } else if (address === undefined || address === "") {
      Alert.alert(
        "Error!",
        "Invalid address",
        [
          {
            text: "Ok",
          },
        ],
        { cancelable: false }
      );
    } else if (
      zipcode === undefined ||
      zipcode === "" ||
      zipcode.length < 5 ||
      isNaN(zipcode)
    ) {
      Alert.alert(
        "Error!",
        "Invalid zipcode",
        [
          {
            text: "Ok",
          },
        ],
        { cancelable: false }
      );
    } else if (city === undefined || city === "") {
      Alert.alert(
        "Error!",
        "Invalid city",
        [
          {
            text: "Ok",
          },
        ],
        { cancelable: false }
      );
    } else if (
      contactNo === undefined ||
      contactNo === "" ||
      isNaN(contactNo)
    ) {
      Alert.alert(
        "Error!",
        "Invalid contact number",
        [
          {
            text: "Ok",
          },
        ],
        { cancelable: false }
      );
    } else {
      db.transaction((tx) => {
        tx.executeSql(
          "create table if not exists DataTable (id integer primary key not null, name text, email text, password text, " +
            "rePassword text, address text, zipcode int, city text, contactNo text);",
          []
        );

        tx.executeSql(
          "insert into DataTable (name, email, password, rePassword, address, zipcode, city, contactNo) values " +
            "(?, ?, ?, ?, ?, ?, ?, ?)",
          [
            name,
            email,
            password,
            rePassword,
            address,
            zipcode,
            city,
            contactNo,
          ],
          (tx, results) => {
            if (results.rowsAffected > 0) {
              Alert.alert(
                "Success",
                "You are Registered Successfully",
                [
                  {
                    text: "Continue",
                    onPress: () => navigation.navigate("Home"),
                  },
                ],
                { cancelable: false }
              );
            } else alert("Registration Failed");
          }
        );
      });
    }
  };

  function renderSignUpHeader() {
    return (
      <View>
        <Text style={styles.signUpText}>SIGN UP</Text>
      </View>
    );
  }

  function renderSignUpInq() {
    return (
      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.inqLabel}>Name</Text>
          <TextInput
            style={styles.inqInput}
            selectionColor={COLORS.primary}
            onChangeText={onChangeName}
            value={name}
          />
          <Text style={styles.inqLabel}>Email</Text>
          <TextInput
            style={styles.inqInput}
            selectionColor={COLORS.primary}
            onChangeText={onChangeEmail}
            value={email}
          />
          <Text style={styles.inqLabel}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.inqInput}
            selectionColor={COLORS.primary}
            onChangeText={onChangePassword}
            value={password}
          />
          <Text style={styles.inqLabel}>Re-enter Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.inqInput}
            selectionColor={COLORS.primary}
            onChangeText={onChangeRePassword}
            value={rePassword}
          />
          <Text style={styles.inqLabel}>Address</Text>
          <TextInput
            style={styles.inqInput}
            selectionColor={COLORS.primary}
            onChangeText={onChangeAddress}
            value={address}
          />
          <View style={styles.zipCity}>
            <Text style={styles.zipcodeLabel}>Zipcode</Text>
            <TextInput
              style={styles.zipcodeInput}
              keyboardType="numeric"
              selectionColor={COLORS.primary}
              onChangeText={onChangeZipcode}
              value={zipcode}
              maxLength={5}
            />
            <Text style={styles.cityLabel}>City</Text>
            <TextInput
              style={styles.cityInput}
              selectionColor={COLORS.primary}
              onChangeText={onChangeCity}
              value={city}
            />
          </View>
          <Text style={styles.contactNoLabel}>Contact Number</Text>
          <TextInput
            style={styles.contactNoInput}
            keyboardType="numeric"
            selectionColor={COLORS.primary}
            onChangeText={onChangeContactNo}
            value={contactNo}
            maxLength={10}
          />
        </ScrollView>
      </View>
    );
  }

  function renderCreateButton() {
    return (
      <View style={styles.CreateAccount}>
        <TouchableOpacity onPress={() => create_account()}>
          <Text style={styles.createText}>Create</Text>
        </TouchableOpacity>
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
          {renderSignUpHeader()}
          {renderSignUpInq()}
          {renderCreateButton()}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 4,
    marginVertical: "10%",
    marginLeft: "30%",
    width: 450,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  signUpText: {
    // top: 0,
    // bottom: 50,
    top: 20,
    fontFamily: "SignikaNegative-Bold",
    textAlign: "center",
    fontSize: RFValue(80, 896),
    color: COLORS.primary,
  },

  inqLabel: {
    fontFamily: "SignikaNegative-Bold",
    fontSize: RFValue(25, 896),
    // right: 50,
    // bottom: 50,
    top: 20,
  },

  inqInput: {
    top: 20,
    width: wp("90%"),
    height: hp("5%"),
    // left: 10,
    // top: 115,
    // bottom: 50,
    marginBottom: 20,
    fontSize: RFValue(30, 896),
    backgroundColor: "#EBEBEB",
    // borderRadius: 10,
    fontFamily: "SignikaNegative-Regular",
  },
  zipCity: {
    alignItems: "flex-start",
    flex: 1,
    flexDirection: "row",
    marginVertical: 20,
    marginBottom: 2,
  },
  zipcodeLabel: {
    fontFamily: "SignikaNegative-Bold",
    fontSize: RFValue(25, 896),
    // right: 50,
    // bottom: 50,
    //top: 20,
  },

  zipcodeInput: {
    //top: 20,
    width: wp("30%"),
    height: hp("5%"),
    marginVertical: 20,
    right: 55,
    // top: 115,
    // bottom: 50,
    //marginBottom: 20,
    fontSize: RFValue(30, 896),
    backgroundColor: "#EBEBEB",
    // borderRadius: 10,
    fontFamily: "SignikaNegative-Regular",
  },

  cityLabel: {
    fontFamily: "SignikaNegative-Bold",
    fontSize: RFValue(25, 896),
    //left: 150,
    // right: 50,
    //bottom: 75,
  },

  cityInput: {
    width: wp("46%"),
    height: hp("5%"),
    marginVertical: 20,
    right: 30,
    // top: 115,
    //bottom: 73,
    //left: 150,
    fontSize: RFValue(30, 896),
    backgroundColor: "#EBEBEB",
    // borderRadius: 10,
    fontFamily: "SignikaNegative-Regular",
  },

  contactNoLabel: {
    fontFamily: "SignikaNegative-Bold",
    fontSize: RFValue(25, 896),
    // right: 50,
    marginTop: 1,
  },

  contactNoInput: {
    width: wp("90%"),
    height: hp("5%"),
    // left: 10,
    marginBottom: 10,
    fontSize: RFValue(30, 896),
    backgroundColor: "#EBEBEB",
    // borderRadius: 10,
    fontFamily: "SignikaNegative-Regular",
  },
  CreateAccount: {
    marginVertical: "5%",
    width: 330,
    height: 60,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: COLORS.primary,
    marginLeft: "30%",
    backgroundColor: COLORS.secondary,
  },
  createText: {
    textAlign: "center",
    marginVertical: "4%",
    fontFamily: "SignikaNegative-Bold",
    fontSize: 30,
    width: 330,
    height: 60,
    color: COLORS.primary,
  },
});
export default createAccount;
