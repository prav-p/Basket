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
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UniversalGeocoder from "universal-geocoder";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
class Checkout extends React.Component {
  state = {
    geoInput: "",
    fromLoc: [
      {
        latitude: 47.64980739969915,
        longitude: -122.36211289260756,
      },
    ],
    toLoc: [
      {
        latitude: 47.64980739969915,
        longitude: -122.36211289260756,
      },
    ],
    region: [
      {
        latitude: 47.64980739969915,
        longitude: -122.36211289260756,
        latitudeDelta: 0.035,
        longitudeDelta: 0.045,
      },
    ],
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = async () => {
    const storeArray = await AsyncStorage.getItem("@store_Key");
    const parseStoreArray = JSON.parse(storeArray);

    this.setState({
      fromLoc: [
        {
          latitude: parseStoreArray[0].coordinates.latitude,
          longitude: parseStoreArray[0].coordinates.longitude,
        },
      ],

      region: [
        {
          latitude: parseStoreArray[0].coordinates.latitude,
          longitude: parseStoreArray[0].coordinates.longitude,
          latitudeDelta: 0.035,
          longitudeDelta: 0.045,
        },
      ],
    });
  };

  userInputLocation = async (text) => {
    const storeArray = await AsyncStorage.getItem("@store_Key");
    const parseStoreArray = JSON.parse(storeArray);

    if (text === "") {
      this.setState({
        fromLoc: [
          {
            latitude: parseStoreArray[0].coordinates.latitude,
            longitude: parseStoreArray[0].coordinates.longitude,
          },
        ],

        region: [
          {
            latitude: parseStoreArray[0].coordinates.latitude,
            longitude: parseStoreArray[0].coordinates.longitude,
            latitudeDelta: 0.035,
            longitudeDelta: 0.045,
          },
        ],
      });
    } else {
      const bingGeocoder = UniversalGeocoder.createGeocoder({
        provider: "bing",
        apiKey:
          "AoJNE9rgNyEuHs7JbEW4rqRimwp-R2Mc-F2ipRUzfuz8HcXYGc9Vp4DNnG67TKJf ",
      });

      bingGeocoder.geocode(text, (result) => {
        this.setState({
          fromLoc: [
            {
              latitude: parseStoreArray[0].coordinates.latitude,
              longitude: parseStoreArray[0].coordinates.longitude,
            },
          ],

          toLoc: [
            {
              latitude: result[0].coordinates.latitude,
              longitude: result[0].coordinates.longitude,
            },
          ],

          // region: [this.getRegionForCoordinates(this.state.cd)]
          region: [
            {
              latitude:
                (parseStoreArray[0].coordinates.latitude +
                  result[0].coordinates.latitude) /
                2,
              longitude:
                (parseStoreArray[0].coordinates.longitude +
                  result[0].coordinates.longitude) /
                2,
              latitudeDelta: this.state.region[0].latitudeDelta + 0.08,
              longitudeDelta: this.state.region[0].longitudeDelta + 0.08,
            },
          ],
        });
      });
    }
  };

  confirmOrder = async () => {
    const storeArray = await AsyncStorage.getItem("@store_Key");
    const parseStoreArray = JSON.parse(storeArray);

    switch (parseStoreArray[0].storeName) {
      case "Asian Family Market Seattle":
        await AsyncStorage.removeItem("@order_Key");
        break;
      case "Mendoza's Mexican Mercado":
        await AsyncStorage.removeItem("@order_MKey");
        break;
      case "European Foods":
        await AsyncStorage.removeItem("@order_EKey");
        break;
    }

    this.props.navigation.navigate("ThankYou");
  };

  render() {
    return (
      // <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {/* Return Button */}
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.goBack}>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#white"
                    onPress={() => this.props.navigation.navigate("Item")}
                  >
                    <IconButton icon={icons.goBack} />
                  </TouchableHighlight>
                </View>
                {/* Title */}
                <View>
                  <Text style={styles.titleText}>Delivery</Text>
                </View>
              </View>
            </View>

            <View style={{ alignItems: "center" }}>
              <MapView
                region={this.state.region[0]}
                style={{ width: 300, height: 250, bottom: 50 }}
              >
                <Marker
                  coordinate={{
                    latitude: this.state.toLoc[0].latitude,
                    longitude: this.state.toLoc[0].longitude,
                  }}
                />
                <Marker
                  coordinate={{
                    latitude: this.state.fromLoc[0].latitude,
                    longitude: this.state.fromLoc[0].longitude,
                  }}
                ></Marker>
              </MapView>
            </View>
            <View style={{ width: 220, bottom: 5, right: 10 }}>
              <View style={{ marginBottom: "15%" }}>
                <Text
                  style={{
                    color: "#000000",
                    left: 20,
                    fontSize: 16,
                    bottom: 20,
                    width: 220,
                    fontFamily: "SignikaNegative-SemiBold",
                  }}
                >
                  Please enter delivery details below
                </Text>
              </View>
              <Text
                style={{
                  color: "#000000",
                  left: 20,
                  fontSize: 20,
                  bottom: 20,
                  fontFamily: "SignikaNegative-SemiBold",
                }}
              >
                Delivery Address
              </Text>
              <TextInput
                selectionColor={COLORS.primary}
                style={{
                  backgroundColor: "#ebebeb",
                  left: 20,
                  width: 330,
                  height: 35,
                  bottom: 20,
                }}
                onChangeText={(text) => this.setState({ geoInput: text })}
                value={this.state.geoInput}
              />
              <Text
                style={{
                  color: "#000000",
                  left: 20,
                  fontSize: 20,
                  fontFamily: "SignikaNegative-SemiBold",
                }}
              >
                Phone Number
              </Text>
              <TextInput
                selectionColor={COLORS.primary}
                style={{
                  backgroundColor: "#ebebeb",
                  left: 20,
                  width: 330,
                  height: 35,
                }}
              />
            </View>
            <View style={{ left: 8, marginTop: 10 }}>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 16,
                  width: 220,
                  fontFamily: "SignikaNegative-SemiBold",
                }}
              >
                {" "}
                View Delivery Route
              </Text>
            </View>
            <View style={styles.route}>
              <TouchableOpacity
                onPress={() => this.userInputLocation(this.state.geoInput)}
              >
                <Text Text style={styles.routeText}>
                  View
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.order}>
              <TouchableOpacity
                onPress={() => {
                  this.confirmOrder();
                }}
              >
                <Text Text style={styles.orderText}>
                  Confirm Order
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
      // </View>
    );
  }
}

const screen_width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: COLORS.secondary,
  },
  goBack: {
    height: 20,
    width: 20,
    right: 35,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    color: COLORS.secondary,
    marginBottom: "20%",
  },
  titleText: {
    fontSize: 30,
    fontFamily: "SignikaNegative-Bold",
    color: COLORS.primary,
    bottom: 5,
    marginRight: "25%",
  },
  input: {
    bottom: 50,
    right: 20,
  },
  route: {
    marginTop: "4%",
    width: 80,
    height: 30,
    borderRadius: 10,
    // top: 30
    backgroundColor: COLORS.primary,
    left: 8,
  },
  routeText: {
    textAlign: "center",
    marginVertical: "5%",
    fontFamily: "SignikaNegative-SemiBold",
    fontSize: 20,
    width: 80,
    height: 30,
  },
  order: {
    marginTop: "20%",
    width: 330,
    height: 60,
    borderRadius: 20,
    // top: 30
    backgroundColor: COLORS.primary,
    left: 8,
  },

  orderText: {
    textAlign: "center",
    marginVertical: "4%",
    fontFamily: "SignikaNegative-Bold",
    fontSize: 30,
    width: 330,
    height: 60,
  },
});

export default Checkout;
