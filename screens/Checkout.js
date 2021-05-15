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
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UniversalGeocoder from "universal-geocoder";

class Checkout extends React.Component {
    state = {
        geoInput: "",
        region: []
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = async() => {
        const storeArray = await AsyncStorage.getItem('@store_Key');
        const parseStoreArray = JSON.parse(storeArray);

        this.setState({
            region: [{
              latitude: parseStoreArray[0].coordinates.latitude,
              longitude: parseStoreArray[0].coordinates.longitude,
              latitudeDelta: 0.035,
              longitudeDelta: 0.045,
            }]
        })
    } 

    toLocation = (text) => {
      const bingGeocoder = UniversalGeocoder.createGeocoder({
        provider: "bing",
        apiKey: "AoJNE9rgNyEuHs7JbEW4rqRimwp-R2Mc-F2ipRUzfuz8HcXYGc9Vp4DNnG67TKJf "
      });

      bingGeocoder.geocode(text, (result) => {
        this.setState({ 
          region: [{
            latitude: result[0].coordinates.latitude,
            longitude: result[0].coordinates.longitude,
            latitudeDelta: 0.035,
            longitudeDelta: 0.045,
          }]
        })

        console.log(result[0].coordinates);
      });

    }

    render() {
        return (
          <View style={styles.container}>
            <SafeAreaView
              style={{
                height: 150,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 20,
                  alignItems: "center",
                  height: 25,
                  wdith: 25,
                }}
              >
                {/* Return Button */}

                <TouchableOpacity onPress={() => this.props.navigation.navigate("Item")}>
                  <IconButton icon={icons.goBack} />
                </TouchableOpacity>

                {/* Title */}
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    height: 100
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.primary,
                      ...FONTS.h1,
                      fontSize: 37,
                      top: 60,
                    }}
                  >
                    Delivery Address
                  </Text>
                </View>
                {/* Empty View */}
                <View style={{ width: 25 }}></View>
              </View>
            </SafeAreaView>
            <SafeAreaView>
              <View style={styles.btn1}>
                <View style={styles.insidebtn}>
                  <TouchableOpacity onPress={() => {this.toLocation(this.state.geoInput)}}>
                    <Text
                      style={{
                        paddingLeft: screen_width / 10,
                        paddingRight: screen_width / 10, // if this is changed to SCREEN_WIDTH / 21 everything works
                        fontSize: screen_width / 10,
                        fontFamily: "SignikaNegative-Bold",
                      }}
                    >
                      Confirm Order
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </SafeAreaView>
            <View style={{alignItems: 'center'}}>
              <MapView 
                region={this.state.region[0]}
                style={{width: 300, height: 200, bottom: 500}}
              >
              </MapView>
            </View>
            <View style={{width: 200}}>
              <Text 
                style={{
                  color: "#000000",
                  left: 35,
                  bottom: 455,
                  fontSize: 20
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
                  height: 35
                }}
                onChangeText={(text) => this.setState({geoInput: text})}
                value={this.state.geoInput}
              />
              <Text 
                style={{
                  color: "#000000",
                  left: 35,
                  bottom: 445,
                  fontSize: 20
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
                  height: 35
                }}
              />
            </View>
          </View>
        )
    }
}

const screen_width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn1: {
    alignItems: "center",
    marginTop: hp("62%"),
  },
  insidebtn: {
    height: hp("7.5%"),
    width: wp("95%"),
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});

export default Checkout;
