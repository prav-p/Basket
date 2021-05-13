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
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Checkout extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.makeRemoteRequest()
    }

    makeRemoteRequest = async() => {
        const storeArray = await AsyncStorage.getItem('@store_Key');
        const parseStoreArray = JSON.parse(storeArray);
        console.log(parseStoreArray[0].coordinates)

        this.setState({
            data: parseStoreArray
        })
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
                  <TouchableOpacity onPress={() => navigation.navigate("")}>
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
                region={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                style={{width: 300, height: 200, bottom: 500}}
              >
                <Marker
                  coordinate={this.state.data.coordinates}
                >

                </Marker>
              </MapView>
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
    //textAlign: "center",
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});

export default Checkout;
