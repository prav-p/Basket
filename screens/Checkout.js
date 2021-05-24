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
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UniversalGeocoder from "universal-geocoder";

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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {/*Return Button */}
          <View style={styles.goBack}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#white"
              onPress={() => this.props.navigation.navigate("Item")}
            >
              <IconButton icon={icons.goBack} />
            </TouchableHighlight>
          </View>
          {/*Title Button */}
          <View>
            <Text style={styles.titleText}>Delivery</Text>
          </View>
        </View>
        <SafeAreaView>
          <View style={styles.order}>
            <TouchableOpacity
              onPress={() => {
                this.userInputLocation(this.state.geoInput);
              }}
            >
              <Text style={styles.orderText}>Confirm Order</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <View style={styles.input}>
          <View style={{ alignItems: "center" }}>
            <MapView
              region={this.state.region[0]}
              style={{ width: 330, height: 250, bottom: 530, left: 10 }}
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
          <View style={{ width: 200 }}>
            <Text
              style={{
                color: "#000000",
                left: 35,
                bottom: 455,
                fontSize: 20,
              }}
            >
              Address
            </Text>
            <TextInput
              style={{
                backgroundColor: "#C4C4C4",
                left: 35,
                width: 305,
                bottom: 450,
                height: 35,
              }}
              onChangeText={(text) => this.setState({ geoInput: text })}
              value={this.state.geoInput}
            />
            <Text
              style={{
                color: "#000000",
                left: 35,
                bottom: 445,
                fontSize: 20,
              }}
            >
              Phone Number
            </Text>
            <TextInput
              style={{
                backgroundColor: "#C4C4C4",
                left: 35,
                width: 305,
                bottom: 440,
                height: 35,
              }}
              keyboardType="numeric"
              maxLength={10}
            />
          </View>
        </View>
      </View>
    );
  }
}

const screen_width = Dimensions.get("window").width;

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
  input: {
    bottom: 50,
    right: 12,
  },
  order: {
    marginTop: "180%",
    width: 330,
    height: 60,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    left: 10,
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
