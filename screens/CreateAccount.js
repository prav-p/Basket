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
import { add } from "react-native-reanimated";

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
        <Text style={styles.nameLabel}>Name</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={onChangeName}
          value={name}
        />
        <Text style={styles.nameLabel}>Email</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={onChangeEmail}
          value={email}
        />
        <Text style={styles.nameLabel}>Password</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={onChangePassword}
          value={password}
        />
        <Text style={styles.nameLabel}>Re-enter Password</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={onChangeRePassword}
          value={rePassword}
        />
        <Text style={styles.nameLabel}>Address</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={onChangeAddress}
          value={address}
        />
        <Text style={styles.zipcodeLabel}>Zipcode</Text>
        <TextInput
          style={styles.zipcodeInput}
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
          onChangeText={onChangeContactNo}
          value={contactNo}
        />
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

  nameLabel: {
    fontFamily: "SignikaNegative-Bold",
    fontSize: RFValue(25, 896),
    // right: 50,
    // bottom: 50,
    top: 20,
  },

  nameInput: {
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

  // emailLabel: {
  //     fontFamily: "SignikaNegative-Bold",
  //     fontSize: RFValue(25, 896),
  //     // right: 50,
  //     bottom: 50,
  // },

  // emailInput: {
  //     width: wp("90%"),
  //     height: hp("5%"),
  //     // left: 10,
  //     // top: 115,
  //     bottom: 50,
  //     fontSize: RFValue(30, 896),
  //     backgroundColor: "#EBEBEB",
  //     // borderRadius: 10,
  //     fontFamily: "SignikaNegative-Regular",
  // },

  // passwordLabel: {
  //     fontFamily: "SignikaNegative-Bold",
  //     fontSize: RFValue(25, 896),
  //     // right: 50,
  //     bottom: 50,
  // },

  // passwordInput: {
  //     width: wp("90%"),
  //     height: hp("5%"),
  //     // left: 10,
  //     // top: 115,
  //     bottom: 50,
  //     fontSize: RFValue(30, 896),
  //     backgroundColor: "#EBEBEB",
  //     // borderRadius: 10,
  //     fontFamily: "SignikaNegative-Regular",
  // },

  // rePasswordLabel: {
  //     fontFamily: "SignikaNegative-Bold",
  //     fontSize: RFValue(25, 896),
  //     // right: 50,
  //     bottom: 50,
  // },

  // rePasswordInput: {
  //     width: wp("90%"),
  //     height: hp("5%"),
  //     // left: 10,
  //     // top: 115,
  //     bottom: 50,
  //     fontSize: RFValue(30, 896),
  //     backgroundColor: "#EBEBEB",
  //     // borderRadius: 10,
  //     fontFamily: "SignikaNegative-Regular",
  // },

  // addressLabel: {
  //     fontFamily: "SignikaNegative-Bold",
  //     fontSize: RFValue(25, 896),
  //     // right: 50,
  //     bottom: 50,
  // },

  // addressInput: {
  //     width: wp("90%"),
  //     height: hp("5%"),
  //     // left: 10,
  //     // top: 115,
  //     bottom: 50,
  //     fontSize: RFValue(30, 896),
  //     backgroundColor: "#EBEBEB",
  //     // borderRadius: 10,
  //     fontFamily: "SignikaNegative-Regular",
  // },

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
});
export default createAccount;
