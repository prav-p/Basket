import React from "react";
import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import filter from "lodash.filter";
import Data from "../assets/stores.json";
import { COLORS } from "../constants";
import { StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Home extends React.Component {
  state = {
    data: [],
    query: "",
    fullData: [],
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({
      data: Data,
      fullData: Data,
    });
  };

  contains = ({ storeName, storeLocation }, query) => {
    if (
      storeName.toUpperCase().includes(query) ||
      storeLocation.toUpperCase().includes(query)
    ) {
      return true;
    }
    return false;
  };

  handleSearch = (text) => {
    const formattedQuery = text.toUpperCase();
    const data = filter(this.state.fullData, (store) => {
      return this.contains(store, formattedQuery);
    });
    this.setState({ data, query: text });
  };

  renderHeader = () => {
    const navigation = useNavigation();
    return (
      <>
        <View style={style.container}>
          <View style={style.header}>
            <View>
              <Text style={style.titleText}>Stores Nearby</Text>
            </View>
            <View style={style.checkout}>
              <TouchableOpacity onPress={() => navigation.navigate("Item")}>
                <Image
                  source={require("../assets/icons/BasketGreen.png")}
                  style={{ width: 35, height: 35 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.headerView}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={this.handleSearch}
              status="info"
              placeholder="Search stores here.."
              style={style.searchBar}
              textStyle={{ color: COLORS.darkGray }}
              clearButtonMode="always"
            ></TextInput>
            <View></View>
          </View>
        </View>
      </>
    );
  };

  renderSeparator = () => {
    return <View style={style.renderSeaparatorView} />;
  };

  async onclick_item(storeName) {
    const res = this.state.data.filter((obj) => {
      return obj.storeName === storeName;
    });
    await AsyncStorage.setItem("@store_Key", JSON.stringify(res));

    switch (storeName) {
      case "Asian Family Market Seattle":
        this.props.navigation.navigate("Asian");
        //navigate
        break;
      case "Mendoza's Mexican Mercado":
        this.props.navigation.navigate("Mendoza");
        //navigate
        break;
      case "European Foods":
        this.props.navigation.navigate("European");
        //navigate
        break;
      default:
      //whatever you want
    }
  }

  render() {
    return (
      <View style={style.renderView}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.onclick_item(item.storeName)}>
              <View style={style.flatListView}>
                <Image
                  Image
                  source={{ uri: item.photo }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 30,
                  }}
                />
                  <Text adjustsFontSizeToFit style={style.flatListText}>
                    {`${item.storeName}`}
                  </Text>
                <Text
                  adjustsFontSizeToFit
                  style={style.storeLocationText}
                >{`${item.storeLocation}`}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.storeLocation}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    color: COLORS.secondary,
    marginTop: "2%",
  },
  titleText: {
    fontSize: 30,
    fontFamily: "SignikaNegative-Bold",
    color: COLORS.primary,
    left: 53,
    marginTop: "15%",
  },

  searchBar: {
    borderColor: "#333",
    backgroundColor: "#ebebeb",
    fontFamily: "SignikaNegative-SemiBold",
    fontStyle: "italic",
    fontSize: 18,
    padding: 15,
    marginTop: "5%",
    borderRadius: 15,
  },

  renderSeaparatorView: {
    height: 2,
    width: "100%",
    backgroundColor: COLORS.primary,
  },

  renderView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.secondary,
  },

  flatListView: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    width: 50,
  },

  flatListText: {
    left: 20,
    color: COLORS.black,
    fontFamily: "Montserrat-Bold",
    fontSize: 15,
    flexDirection: "row",
    width: 180,
    bottom: 20,
  },
  storeLocationText: {
    top: 20,
    right: 160,
    color: COLORS.black,
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    flexDirection: "row",
    width: 150,
    height: 50,
  },
  checkout: {
    left: 35,
    marginTop: "6%",
  },
});

export default Home;
