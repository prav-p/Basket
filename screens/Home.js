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
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

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
      console.log(this.contains(store, formattedQuery));
      return this.contains(store, formattedQuery);
    });
    this.setState({ data, query: text });
    console.log(data);
  };

  renderHeader = () => {
    const navigation = useNavigation();
    return (
      <>
        <View style={style.basket}>
          <Text style={{ right: 280, top: 20, fontSize: 20 }}>
            {" "}
            Stores Nearby
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Basket")}>
            <Image source={require("../assets/icons/BasketGreen.png")} />
          </TouchableOpacity>
        </View>
        <View style={style.headerView}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.handleSearch}
            status="info"
            placeholder="Search"
            style={style.searchBar}
            textStyle={{ color: "#000" }}
            clearButtonMode="always"
          ></TextInput>
        </View>
      </>
    );
  };

  renderSeparator = () => {
    return <View style={style.renderSeaparatorView} />;
  };

  onclick_item(storeName) {
    switch (storeName) {
      case "Asian":
        this.props.navigation.navigate("Asian");
        //navigate
        break;
      case "Mendoza":
        this.props.navigation.navigate("Mendoza");
        //navigate
        break;
      case "European":
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
                <Text category="s1" style={style.flatListText}>
                  {`${item.storeName} ${item.storeLocation}`}
                </Text>
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
  basket: { top: -5, left: 280, height: 60 },
  headerView: {
    backgroundColor: "#fff",
    padding: 10,
  },

  searchBar: {
    borderRadius: 25,
    borderColor: "#333",
    backgroundColor: "#fff",
  },

  renderSeaparatorView: {
    height: 2,
    width: "100%",
    backgroundColor: "#CED0CE",
    //marginLeft: "5%",
  },

  renderView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: "10%",
  },

  flatListView: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },

  flatListText: {
    color: "#000",
  },
});

export default Home;
