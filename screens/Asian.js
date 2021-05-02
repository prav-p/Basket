import React from "react";
import {
  Text,
  FlatList,
  View,
  TextInput,
  Image,
  TouchableHighlight,
} from "react-native";
import filter from "lodash.filter";
import categoryData from "../assets/store_category.json";
import { StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import AsianMilk from "./AsianMilk";
import { TouchableOpacity } from "react-native-gesture-handler";

class Asian extends React.Component {
  state = {
    data: [],
    full_Data: [],
    query: "",
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({
      data: categoryData,
      full_Data: categoryData,
    });
  };

  contains = ({ category }, query) => {
    if (category.toUpperCase().includes(query)) {
      return true;
    }
    return false;
  };

  handleSearch = (text) => {
    const formattedQuery = text.toUpperCase();
    const data = filter(this.state.full_Data, (storeCategory) => {
      return this.contains(storeCategory, formattedQuery);
    });

    this.setState({ data, query: text });
  };

  renderHeader = () => (
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
      />
    </View>
  );

  renderSeparator = () => {
    return <View style={style.renderSeaparatorView} />;
  };

  onclick_item(storeName) {
    // switch (storeName) {
    //     case "Asian":
    //         this.props.navigation.navigate("Asian");
    //         //navigate
    //         break;
    //     case "Mendoza":
    //         this.props.navigation.navigate("Mendoza");
    //         //navigate
    //         break;
    //     case "European":
    //         this.props.navigation.navigate("European");
    //         //navigate
    //         break;
    //     default:
    //     //whatever you want
    // }
  }

  render() {
    const { navigation } = this.props.navigation;
    return (
      <View style={style.renderView}>
        <View>
          <TouchableOpacity>
            <Image source={require("../assets/icons/BasketGreen.png")} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={style.titleText}>Asian Family Market</Text>
        </View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={style.flatListView}>
              <Text category="s1" style={style.flatListText}>
                {`${item.category}\n\n\n\n\n\n`}
                <Text>{`${item.subCategory}`}</Text>
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.category}
          ItemSeparatorComponent={this.renderSeparator}
        />
        <View style={style.btn1}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("AsianMilk")}
          >
            <View>
              <Image
                source={require("../assets/images/darigold_whole_milk.jpg")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
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
    height: 1,
    width: "86%",
    backgroundColor: "#CED0CE",
    marginLeft: "5%",
  },

  renderView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 40,
  },

  flatListView: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },

  flatListText: {
    color: "#000",
  },

  titleText: {
    textAlign: "center",
  },

  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },

  item: {
    width: "50%", // is 50% of container width
  },
  btn1: {
    alignItems: "flex-start",
    //marginTop: "62%",
    bottom: 400,
  },
});

export default Asian;
