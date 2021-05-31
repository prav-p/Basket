import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { COLORS, FONTS, icons, images } from "../constants";
import { IconButton } from "../components";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Data from "../assets/store_items.json";
import TouchableScale from "react-native-touchable-scale";
class Item extends React.Component {
  state = {
    data: [],
    fullData: [],
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = async () => {
    const storeArray = await AsyncStorage.getItem("@store_Key");
    const parseStoreArray = JSON.parse(storeArray);

    if (parseStoreArray[0].storeName === "Asian Family Market Seattle") {
      const orderArray = await AsyncStorage.getItem("@order_Key");
      const parseOrderArray = JSON.parse(orderArray);

      if (parseOrderArray === null) {
        this.setState({
          data: [],
          fullData: Data,
        });
      } else {
        const filterArray = parseOrderArray.filter((item) => item.qty !== 0);

        this.setState({
          data: filterArray,
          fullData: Data,
        });
      }
    } else if (parseStoreArray[0].storeName === "European Foods") {
      const orderArrayE = await AsyncStorage.getItem("@order_EKey");
      const parseOrderArrayE = JSON.parse(orderArrayE);

      if (parseOrderArrayE === null) {
        this.setState({
          data: [],
          fullData: Data,
        });
      } else {
        const filterArrayE = parseOrderArrayE.filter((item) => item.qty !== 0);

        this.setState({
          data: filterArrayE,
          fullData: Data,
        });
      }
    } else {
      const orderArrayM = await AsyncStorage.getItem("@order_MKey");
      const parseOrderArrayM = JSON.parse(orderArrayM);

      if (parseOrderArrayM === null) {
        this.setState({
          data: [],
          fullData: Data,
        });
      } else {
        const filterArrayM = parseOrderArrayM.filter((item) => item.qty !== 0);

        this.setState({
          data: filterArrayM,
          fullData: Data,
        });
      }
    }
  };

  navigateBack = async () => {
    const storeArray = await AsyncStorage.getItem("@store_Key");
    const parseStoreArray = JSON.parse(storeArray);

    switch (parseStoreArray[0].storeName) {
      case "Asian Family Market Seattle":
        this.props.navigation.navigate("Asian");
        break;
      case "Mendoza's Mexican Mercado":
        this.props.navigation.navigate("Mendoza");
        break;
      case "European Foods":
        this.props.navigation.navigate("European");
        break;
    }
  };

  getItemPrice = (item) => {
    let itemPrice = 0;
    itemPrice += item.qty * item.price;
    return itemPrice.toFixed(2);
  };

  getSubTotalPrice = () => {
    let subTotal = this.state.data.reduce((a, b) => a + (b.total || 0), 0);
    return subTotal.toFixed(2);
  };

  getSalesTax = () => {
    let salesTax = this.getSubTotalPrice() * (10.1 / 100);
    return salesTax.toFixed(2);
  };

  getTotalPrice = () => {
    var totalPrice = +this.getSubTotalPrice() + +this.getSalesTax();
    return totalPrice.toFixed(2);
  };

  render() {
    if (this.getTotalPrice() == 0) {
      return (
        <View style={styles.renderView}>
          <View style={styles.header}>
            {/*Return Button */}
            <View style={styles.goBack}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#white"
                onPress={() => this.navigateBack()}
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
            <TouchableScale activeScale={0.5}>
              <Text style={styles.CheckoutText}>Continue</Text>
            </TouchableScale>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.renderView}>
          <View style={styles.header}>
            {/*Return Button */}
            <View style={styles.goBack}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#white"
                onPress={() => this.navigateBack()}
              >
                <IconButton icon={icons.goBack} />
              </TouchableHighlight>
            </View>
            {/*Title Button */}
            <View>
              <Text style={styles.titleText}>Checkout</Text>
            </View>
          </View>
          <FlatList
            style={{
              flex: 1,
            }}
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={styles.FlatListView}>
                <View style={styles.itemDescrp}>
                  <Image
                    Image
                    source={{ uri: item.picture }}
                    style={{ width: 60, height: 60 }}
                  />
                  <Text style={styles.itemName}>{`${item.name}\t`}</Text>
                  <Text style={styles.itemQty}>{`${item.qty}\t`}</Text>
                  <Text style={styles.itemPrice}>${`${item.price}`}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.name}
          />
          <View style={styles.renderSeaparatorView}></View>
          <View style={styles.subTotal}>
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "Montserrat-SemiBold",
                fontSize: 16,
                top: "10%",
                color: COLORS.black,
              }}
            >
              Subtotal
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "Montserrat-SemiBold",
                fontSize: 16,
                marginLeft: "85%",
                width: 100,
                right: 40,
                textAlign: "right",
                color: COLORS.black,
              }}
            >
              ${this.getSubTotalPrice()}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "Montserrat-SemiBold",
                fontSize: 16,
                top: "10%",
                color: COLORS.black,
              }}
            >
              Delivery
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "Montserrat-SemiBold",
                fontSize: 16,
                marginLeft: "85%",
                width: 100,
                right: 40,
                textAlign: "right",
                color: COLORS.black,
              }}
            >
              $1.99
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "Montserrat-SemiBold",
                fontSize: 16,
                top: "10%",
                color: COLORS.black,
              }}
            >
              Est. Sales Tax
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "Montserrat-SemiBold",
                fontSize: 16,
                marginLeft: "85%",
                width: 100,
                right: 40,
                textAlign: "right",
                color: COLORS.black,
              }}
            >
              ${this.getSalesTax()}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "Montserrat-Bold",
                fontSize: 18,
                top: "20%",
                color: COLORS.black,
              }}
            >
              Total
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "Montserrat-Bold",
                fontSize: 18,
                marginLeft: "85%",
                top: "10%",
                width: 100,
                right: 40,
                textAlign: "right",
                color: COLORS.black,
              }}
            >
              ${this.getTotalPrice()}
            </Text>
          </View>
          <View style={styles.Checkout}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Checkout")}
            >
              <Text style={styles.CheckoutText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
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

  goBack: {
    right: 50,
    marginLeft: "5%",
    bottom: 5,
    height: 20,
    width: 20,
  },
  titleText: {
    fontSize: 30,
    fontFamily: "SignikaNegative-Bold",
    color: COLORS.primary,
    bottom: 12,
    marginLeft: "10%",
    right: 50,
  },
  FlatListView: {
    flex: 1,
    //color: "#000",
    fontFamily: "SignikaNegative-SemiBold",
    fontSize: 16,
    marginTop: 15,
    height: 60,

    alignContent: "flex-start",
  },
  itemDescrp: {
    flexDirection: "row",
    color: COLORS.black,
  },
  itemName: {
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
    width: 140,
    marginHorizontal: "2%",
    top: 10,
    color: COLORS.black,
  },
  itemQty: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    width: 30,
    marginLeft: "5%",
    top: 12,
    left: 5,
    color: COLORS.black,
  },
  itemPrice: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    width: 75,
    marginLeft: "6%",
    left: 15,
    top: 12,
    color: COLORS.black,
  },
  subTotal: {
    width: 330,
    height: 200,
  },
  emptyCheckoutText: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    color: COLORS.black,
  },
  eCheckoutbt: {
    marginVertical: "5%",
    width: 200,
    height: 60,
    borderRadius: 20,
    backgroundColor: COLORS.lightGray,
    left: 75,
  },

  Checkout: {
    marginVertical: "5%",
    width: 200,
    height: 60,
    borderRadius: 20,
    marginLeft: 75,
    backgroundColor: COLORS.lightOrange,
  },
  CheckoutText: {
    textAlign: "center",
    marginVertical: "6%",
    fontFamily: "Montserrat-Bold",
    fontSize: 30,
    width: 200,
    height: 60,
  },
  renderSeaparatorView: {
    height: 1,
    width: 350,
    backgroundColor: COLORS.primary,
  },
});

export default Item;
