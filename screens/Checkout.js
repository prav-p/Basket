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
  KeyboardAvoidingView
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UniversalGeocoder from "universal-geocoder";

class Checkout extends React.Component {
    state = {
        geoInput: "",
        fromLoc: [{
          latitude: 47.64980739969915, 
          longitude: -122.36211289260756,
        }],
        toLoc: [{
          latitude: 47.64980739969915, 
          longitude: -122.36211289260756,
        }],
        region: [{
          latitude: 47.64980739969915, 
          longitude: -122.36211289260756,
          latitudeDelta: 0.035,
          longitudeDelta: 0.045,
        }]
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = async() => {
        const storeArray = await AsyncStorage.getItem('@store_Key');
        const parseStoreArray = JSON.parse(storeArray);

        this.setState({
            fromLoc: [{
              latitude: parseStoreArray[0].coordinates.latitude,
              longitude: parseStoreArray[0].coordinates.longitude
            }],

            region: [{
              latitude: parseStoreArray[0].coordinates.latitude,
              longitude: parseStoreArray[0].coordinates.longitude,
              latitudeDelta: 0.035,
              longitudeDelta: 0.045,
            }]
        })
    } 

    userInputLocation = async(text) => {
      const storeArray = await AsyncStorage.getItem('@store_Key');
      const parseStoreArray = JSON.parse(storeArray);

      if (text === '') {
        this.setState({
            fromLoc: [{
              latitude: parseStoreArray[0].coordinates.latitude,
              longitude: parseStoreArray[0].coordinates.longitude
            }],

            region: [{
              latitude: parseStoreArray[0].coordinates.latitude,
              longitude: parseStoreArray[0].coordinates.longitude,
              latitudeDelta: 0.035,
              longitudeDelta: 0.045,
            }]
        })
      } else {
        const bingGeocoder = UniversalGeocoder.createGeocoder({
          provider: "bing",
          apiKey: "AoJNE9rgNyEuHs7JbEW4rqRimwp-R2Mc-F2ipRUzfuz8HcXYGc9Vp4DNnG67TKJf "
        });
  
        bingGeocoder.geocode(text, (result) => {
          this.setState({
            fromLoc: [{
              latitude: parseStoreArray[0].coordinates.latitude,
              longitude: parseStoreArray[0].coordinates.longitude
            }],

            toLoc: [{
              latitude: result[0].coordinates.latitude,
              longitude: result[0].coordinates.longitude
            }],

            // region: [this.getRegionForCoordinates(this.state.cd)]
            region: [{
              latitude: (parseStoreArray[0].coordinates.latitude + result[0].coordinates.latitude) / 2,
              longitude: (parseStoreArray[0].coordinates.longitude + result[0].coordinates.longitude) / 2,
              latitudeDelta: this.state.region[0].latitudeDelta + 0.08,
              longitudeDelta: this.state.region[0].longitudeDelta + 0.08,
            }]
          })
        });
      }
    }

    render() {
        return (
          // <View style={styles.container}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.container}
            >
              <ScrollView>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

                  <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate("Item")}
                    style={{
                      top: 25
                    }}
                  >
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
              <View style={{alignItems: 'center'}}>
                <MapView 
                  region={this.state.region[0]}
                  style={{width: 300, height: 250, bottom: 50}}
                >
                  <Marker
                    coordinate={{
                      latitude: this.state.toLoc[0].latitude,
                      longitude: this.state.toLoc[0].longitude
                    }}
                  />
                  <Marker
                    coordinate={{
                      latitude: this.state.fromLoc[0].latitude,
                      longitude: this.state.fromLoc[0].longitude,
                    }}
                  >
                  </Marker>
                </MapView>
              </View>
              <View style={{width: 200}}>
                <Text 
                  style={{
                    color: "#000000",
                    left: 35,
                    fontSize: 20,
                    bottom: 20
                  }}
                >
                  Address
                </Text>
                <TextInput 
                  style={{
                    backgroundColor: "#C4C4C4",
                    left: 35,
                    width: 305,
                    height: 35,
                    bottom: 20
                  }}
                  onChangeText={(text) => this.setState({geoInput: text})}
                  value={this.state.geoInput}
                />
                <Text 
                  style={{
                    color: "#000000",
                    left: 35,
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
                    height: 35
                  }}
                />
              </View>
              <SafeAreaView>
                <View style={styles.btn1}>
                  <View style={styles.insidebtn}>
                    <TouchableOpacity onPress={() => {this.userInputLocation(this.state.geoInput)}}>
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
              </TouchableWithoutFeedback>
              </ScrollView>
            </KeyboardAvoidingView>
          // </View>
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
    // top: 50

  },
  insidebtn: {
    height: hp("7.5%"),
    width: wp("95%"),
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    // top: 30
  },
});

export default Checkout;
