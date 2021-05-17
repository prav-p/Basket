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

class Item extends React.Component {
  state = {
    data: [],
    fullData: [],
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = async () => {
    const orderArray = await AsyncStorage.getItem("@order_Key");
    const parseOrderArray = JSON.parse(orderArray);
    const filterArray = parseOrderArray.filter((item) => item.qty !== 0);

    this.setState({
      data: filterArray,
      fullData: Data,
    });
  };

  getSubTotalPrice = () => {
    let subTotal = this.state.data.reduce((a, b) => a + (b.total || 0), 0);

    return subTotal.toFixed(2);
  };

  getSalesTax = () => {
    let salesTax = this.getSubTotalPrice() * (10.1 / 100);
    return salesTax.toFixed(2);
  };

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
                  style={{ width: 80, height: 80 }}
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
              fontFamily: "SignikaNegative-SemiBold",
              fontSize: 18,
              top: "10%",
            }}
          >
            Subtotal
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontFamily: "SignikaNegative-SemiBold",
              fontSize: 18,
              marginLeft: "85%",
            }}
          >
            ${this.getSubTotalPrice()}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontFamily: "SignikaNegative-SemiBold",
              fontSize: 18,
              top: "10%",
            }}
          >
            Delivery
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontFamily: "SignikaNegative-SemiBold",
              fontSize: 18,
              top: "10%",
            }}
          >
            Est. Sales Tax
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontFamily: "SignikaNegative-Bold",
              fontSize: 18,
              marginLeft: "85%",
            }}
          >
            ${this.getSalesTax()}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontFamily: "SignikaNegative-Bold",
              fontSize: 18,
              top: "10%",
            }}
          >
            Total
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontFamily: "SignikaNegative-Bold",
              fontSize: 18,
              marginLeft: "85%",
            }}
          >
            ${this.getSubTotalPrice() + this.getSalesTax()}
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

const styles = StyleSheet.create({
  renderView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
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
  },
  itemName: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: 16,
    width: 140,
    marginHorizontal: "2%",
  },
  itemQty: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: 20,
    width: 20,
    marginLeft: "5%",
  },
  itemPrice: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: 20,
    width: 50,
    marginLeft: "6%",
  },
  subTotal: {
    width: 330,
    height: 200,
  },
  Checkout: {
    marginVertical: "5%",
    width: 330,
    height: 60,
    borderRadius: 20,

    backgroundColor: COLORS.primary,
  },
  CheckoutText: {
    textAlign: "center",
    marginVertical: "4%",
    fontFamily: "SignikaNegative-Bold",
    fontSize: 30,
    width: 330,
    height: 60,
  },
  renderSeaparatorView: {
    height: 1,
    width: "100%",
    backgroundColor: COLORS.primary,
  },
});

export default Item;
