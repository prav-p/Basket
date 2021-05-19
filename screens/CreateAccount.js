import React from "react";
import { COLORS } from "../constants";
import * as SQLite from "expo-sqlite";
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
  Alert,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { add } from "react-native-reanimated";

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
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists DataTable (id integer primary key not null, name text, email text, password text, " +
          "rePassword text, address text, zipcode int, city text, contactNo text);",
        []
      );

      tx.executeSql(
        "insert into DataTable (name, email, password, rePassword, address, zipcode, city, contactNo) values " +
          "(?, ?, ?, ?, ?, ?, ?, ?)",
        [name, email, password, rePassword, address, zipcode, city, contactNo],
        (tx, results) => {
          console.log("Results", results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              "Success",
              "You are Registered Successfully",
              [
                {
                  text: "Ok",
                  onPress: () => navigation.navigate("Home"),
                },
              ],
              { cancelable: false }
            );
          } else alert("Registration Failed");
        }
      );

      tx.executeSql("SELECT * FROM DataTable", [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setFlatListItems(temp);
        console.log(temp);
      });
    });
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
      <View>
        <ScrollView>
          <Text style={styles.inqLabel}>Name</Text>
          <TextInput
            style={styles.inqInput}
            onChangeText={onChangeName}
            value={name}
          />
          <Text style={styles.inqLabel}>Email</Text>
          <TextInput
            style={styles.inqInput}
            onChangeText={onChangeEmail}
            value={email}
          />
          <Text style={styles.inqLabel}>Password</Text>
          <TextInput
            style={styles.inqInput}
            onChangeText={onChangePassword}
            value={password}
          />
          <Text style={styles.inqLabel}>Re-enter Password</Text>
          <TextInput
            style={styles.inqInput}
            onChangeText={onChangeRePassword}
            value={rePassword}
          />
          <Text style={styles.inqLabel}>Address</Text>
          <TextInput
            style={styles.inqInput}
            onChangeText={onChangeAddress}
            value={address}
          />
          <Text style={styles.zipcodeLabel}>Zipcode</Text>
          <TextInput
            style={styles.zipcodeInput}
            keyboardType="numeric"
            onChangeText={onChangeZipcode}
            value={zipcode}
          />
          <Text style={styles.cityLabel}>City</Text>
          <TextInput
            style={styles.cityInput}
            onChangeText={onChangeCity}
            value={city}
          />
          <Text style={styles.contactNoLabel}>Contact Number</Text>
          <TextInput
            style={styles.contactNoInput}
            keyboardType="numeric"
            onChangeText={onChangeContactNo}
            value={contactNo}
          />
          <TouchableOpacity
            style={{ bottom: 100 }}
            onPress={() => create_account()}
          >
            <Text style={styles.text}>Create</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  function renderCreateButton() {
    return (
      <View style={styles.btn1}>
        <View style={styles.insidebtn}>
          <TouchableOpacity
            style={{ bottom: 100 }}
            onPress={() => create_account()}
          >
            <Text style={styles.text}>Create</Text>
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
          {renderSignUpHeader()}
          {renderSignUpInq()}
          {renderCreateButton()}
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

  zipcodeLabel: {
    fontFamily: "SignikaNegative-Bold",
    fontSize: RFValue(25, 896),
    // right: 50,
    // bottom: 50,
    top: 20,
  },

  zipcodeInput: {
    top: 20,
    width: wp("30%"),
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

  cityLabel: {
    fontFamily: "SignikaNegative-Bold",
    fontSize: RFValue(25, 896),
    left: 150,
    // right: 50,
    bottom: 75,
  },

  cityInput: {
    width: wp("54%"),
    height: hp("5%"),
    // left: 10,
    // top: 115,
    bottom: 73,
    left: 150,
    fontSize: RFValue(30, 896),
    backgroundColor: "#EBEBEB",
    // borderRadius: 10,
    fontFamily: "SignikaNegative-Regular",
  },

  contactNoLabel: {
    fontFamily: "SignikaNegative-Bold",
    fontSize: RFValue(25, 896),
    // right: 50,
    bottom: 50,
  },

  contactNoInput: {
    width: wp("90%"),
    height: hp("5%"),
    // left: 10,
    // top: 115,
    bottom: 50,
    fontSize: RFValue(30, 896),
    backgroundColor: "#EBEBEB",
    // borderRadius: 10,
    fontFamily: "SignikaNegative-Regular",
  },

  btn1: {
    flex: 1,
    alignItems: "center",
    // marginTop: "50%",
  },

  insidebtn: {
    // height: hp("7.5%"),
    // width: wp("95%"),
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
export default createAccount;
