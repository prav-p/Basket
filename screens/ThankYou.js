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
            <Text style={styles.titleText}>Checkout</Text>
          </View>
        </View>
        <View style={{ height: 300, marginVertical: "45%" }}>
          <Image
            source={require("../assets/images/confirmation.jpg")}
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
          <Text style={styles.emptyCheckoutText}> Your order is placed!</Text>
        </View>
        <View style={styles.eCheckoutbt}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={styles.CheckoutText}>Return to Home</Text>
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
    marginLeft: "20%",
  },
  emptyCheckoutText: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "SignikaNegative-Bold",
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
    marginVertical: "4%",
    fontFamily: "SignikaNegative-Bold",
    fontSize: 30,
    width: 330,
    height: 60,
  },
});
export default ThankYou;
