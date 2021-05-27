import React from "react";
import { COLORS, FONTS, icons, images } from "../constants";
import { IconButton } from "../components";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Icon,
  Dimensions,
} from "react-native";
import {
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native-gesture-handler";

class ThankYou extends React.Component {
  render() {
    return (
      <View style={styles.renderView}>
        <View style={styles.header}>
          {/*Title Button */}
          <View>
            <Text style={styles.titleText}>Order Confirmed</Text>
          </View>
        </View>
        <View style={{ height: 300, marginVertical: "45%" }}>
          <Text style={styles.emptyCheckoutText}> Your order is placed!</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Image
              source={require("../assets/images/confirmation.jpg")}
              style={{ width: 100, height: 100, alignSelf: "center" }}
            />
            <Text style={styles.returnText}>Return to stores nearby</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  renderView: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,

    backgroundColor: COLORS.secondary,
  },
  header: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    color: COLORS.secondary,
    marginTop: 30,
  },
  titleText: {
    fontSize: 30,
    fontFamily: "SignikaNegative-Bold",
    color: COLORS.primary,
    bottom: 12,
    marginLeft: "5%",
  },
  emptyCheckoutText: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: "15%",
    fontFamily: "SignikaNegative-Bold",
    color: COLORS.black,
  },
  returnText: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: "1%",
    fontFamily: "SignikaNegative-Bold",
    color: COLORS.black,
  },
  eCheckoutbt: {
    marginVertical: "5%",
    width: 330,
    height: 60,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    left: 8,
  },
  CheckoutText: {
    textAlign: "center",
    marginVertical: "10%",
    fontFamily: "SignikaNegative-Bold",
    fontSize: 30,
    width: 330,
    height: 60,
    color: COLORS.black,
  },
});
export default ThankYou;
