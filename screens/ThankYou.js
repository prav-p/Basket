import React from "react";
import { COLORS, FONTS, icons } from "../constants";
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
          {/*Return Button */}
          <View style={styles.goBack}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#white"
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <IconButton icon={icons.goBack} />
            </TouchableHighlight>
          </View>
          {/*Title Button */}
          <View>
            <Text style={styles.titleText}>Checkout</Text>
          </View>
        </View>
        <View style={{ marginVertical: "75%" }}>
          <Image
            source={require("../assets/icons/BasketGreen.png")}
            style={{ width: 60, height: 60, alignSelf: "center" }}
          />
          <Text style={styles.emptyCheckoutText}> Your basket is empty</Text>
        </View>
        <View style={styles.eCheckoutbt}>
          <TouchableOpacity>
            <Text style={styles.CheckoutText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  goBack: {
    right: 50,
    marginLeft: "5%",
    bottom: 10,
    height: 20,
    width: 20,
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
    marginLeft: "10%",
    right: 65,
  },
});
export default ThankYou;
