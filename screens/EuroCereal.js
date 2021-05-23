import React from "react";
import {
  Text,
  FlatList,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import filter from "lodash.filter";
import Data from "../assets/euro_items.json";
import { StyleSheet } from "react-native";
import { IconButton } from "../components";
import { icons, COLORS } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableHighlight } from "react-native-gesture-handler";

class EuroCereal extends React.Component {
  state = {
    data: [],
    query: "",
    fullData: [],
    orderItems: [],
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = async () => {
    const orderArray = await AsyncStorage.getItem("@order_Key");

    this.setState({
      data: Data[6].brand,
      fullData: Data[6].brand,
      orderItems: [],
    });

    if (orderArray !== null) {
      this.setState({
        orderItems: JSON.parse(orderArray),
      });
    }
    console.log(this.state.orderItems);
  };

  contains = ({ name }, query) => {
    if (name.toUpperCase().includes(query)) {
      return true;
    }
    return false;
  };

  handleSearch = (text) => {
    const formattedQuery = text.toUpperCase();
    const data = filter(this.state.fullData, (item) => {
      console.log(this.contains(item, formattedQuery));
      return this.contains(item, formattedQuery);
    });
    this.setState({ data, query: text });
    console.log(this.state.fullData[0].brand);
  };

  renderHeader = () => (
    <View style={styles.headerView}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={this.handleSearch}
        status="info"
        placeholder="Search"
        style={styles.searchBar}
        textStyle={{ color: "#000" }}
        clearButtonMode="always"
      />
    </View>
  );

  renderSeparator = () => {
    return <View style={styles.renderSeaparatorView} />;
  };

  editOrder = async (action, name, price, picture) => {
    let orderList = this.state.orderItems.slice();
    let item = orderList.filter((a) => a.name == name);
    console.log(picture);

    if (action == "+") {
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        const newItem = {
          name: name,
          qty: 1,
          price: price,
          total: price,
          picture: picture,
        };

        orderList.push(newItem);
      }

      this.setState({
        orderItems: orderList,
      });

      console.log(orderList);
    } else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = newQty * price;
        }
      }

      this.setState({
        orderItems: orderList,
      });

      console.log(orderList);
    }

    await AsyncStorage.setItem("@order_Key", JSON.stringify(orderList));

    const orderArray = await AsyncStorage.getItem("@order_Key");

    console.log(JSON.parse(orderArray));
  };

  getOrderQty = (name) => {
    let orderItem = this.state.orderItems.filter((a) => a.name == name);

    if (orderItem.length > 0) {
      return orderItem[0].qty;
    }

    return 0;
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
              onPress={() => this.props.navigation.navigate("European")}
            >
              <IconButton icon={icons.goBack} />
            </TouchableHighlight>
          </View>
          {/*Title Button */}
          <View>
            <Text style={styles.titleText}>Cereals</Text>
          </View>
          {/*Checkout Button */}
          <View style={styles.checkout}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Item")}
            >
              <Image
                source={require("../assets/icons/BasketGreen.png")}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.flatListView}>
              <View style={styles.productDescr}>
                <Image
                  Image
                  source={{ uri: item.picture }}
                  style={{
                    width: 100,
                    height: 100,
                    marginBottom: "5%",
                  }}
                />
                <Text category="s1" style={styles.price}>
                  ${`${item.price}`}
                </Text>
                <Text category="s1" style={styles.name}>{`${item.name}`}</Text>
                <Text category="s1" style={styles.qty}>{`${item.qtyDes}`}</Text>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  onPress={() =>
                    this.editOrder("-", item.name, item.price, item.picture)
                  }
                  style={{
                    width: 30,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    borderWidth: 2,
                    borderColor: COLORS.primary,
                    height: 30,
                    right: 110,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.primary,
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: 30,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 30,
                    right: 110,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.black,
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    {this.getOrderQty(item.name)}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    this.editOrder("+", item.name, item.price, item.picture)
                  }
                  style={{
                    width: 30,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    borderWidth: 2,
                    borderColor: COLORS.primary,
                    right: 110,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.primary,
                      fontWeight: "bold",
                      fontSize: 25,
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item) => item.name}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: "#fff",
    padding: 10,
  },

  searchBar: {
    borderRadius: 7,
    padding: 12,
    marginLeft: -8,
    width: 330,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1,
    },
    backgroundColor: "#fff",
    shadowColor: COLORS.lightGray,
    shadowOpacity: 1,
    fontFamily: "SignikaNegative-SemiBold",
    fontSize: 18,
    fontWeight: "200",
  },

  renderSeaparatorView: {
    height: 1,
    width: "86%",
    backgroundColor: "#CED0CE",
    marginLeft: "5%",
  },

  renderView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.secondary,
  },

  flatListView: {
    padding: 10,
    marginTop: 15,
  },
  productDescr: {
    flex: 1,
  },
  qty: {
    fontFamily: "SignikaNegative-SemiBold",
    fontSize: 16,
    color: COLORS.lightGray,
  },
  name: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: 14,
    width: 100,
  },

  price: {
    fontFamily: "SignikaNegative-SemiBold",
    fontSize: 14,
  },
  flatListText: {
    color: "#000",
    width: 90,
    height: 140,
    fontFamily: "SignikaNegative-SemiBold",
    fontSize: 16,
  },
  header: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    color: COLORS.secondary,
    marginTop: 10,
    marginBottom: 20,
  },
  goBack: {
    right: 30,
    marginLeft: "5%",
    marginTop: "3%",
  },
  titleText: {
    fontSize: 25,
    fontFamily: "SignikaNegative-Bold",
    color: COLORS.primary,
    marginTop: "5%",
    marginLeft: "11%",
    left: 10,
  },
  checkout: {
    marginRight: "1%",
    left: 25,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 100,
    alignContent: "space-between",
    width: 100,
  },
});

export default EuroCereal;
