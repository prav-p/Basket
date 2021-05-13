import React from "react";
import {
  Text,
  FlatList,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  SectionList,
} from "react-native";
import filter from "lodash.filter";
import categoryData from "../assets/store_category.json";
import { StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import AsianMilk from "./AsianMilk";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons, images } from "../constants";
import { IconButton } from "../components";

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
        {/* Return Button */}
        <View style={style.goBack}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <IconButton icon={icons.goBack} />
          </TouchableHighlight>
        </View>
        <View style={style.basket}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Basket")}
          >
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
                <Text style={style.flatListSubCat}>
                  {`${item.subCategory[0].type}\t\t `}
                </Text>
                <Text style={style.flatListSubCat}>
                  {`${item.subCategory[1].type}\t\t `}
                </Text>
                <Text
                  style={style.flatListSubCat}
                >{`${item.subCategory[2].type}`}</Text>
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

        <View style={style.btn2}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("AsianEggs")}
          >
            <View>
              <Image
                source={require("../assets/images/eggs-2.jpg")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
          </TouchableHighlight>
        </View>

        {/* <View style={style.btn3}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("AsianCheese")}
          >
            <View>
              <Image
                source={require("../assets/images/cheese 1.jpg")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
          </TouchableHighlight>
        </View>
        <View style={style.btn4}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("AsianVeg")}
          >
            <View>
              <Image
                source={require("../assets/images/vegetables.jpg")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
          </TouchableHighlight>
        </View>
        <View style={style.btn5}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("AsianOrganicProd")}
          >
            <View>
              <Image
                source={require("../assets/images/organic_produce.jpg")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
          </TouchableHighlight>
        </View>
        <View style={style.btn6}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("AsianFruits")}
          >
            <View>
              <Image
                source={require("../assets/images/fruits.jpg")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
          </TouchableHighlight>
        </View>
        <View style={style.btn7}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("AsianBeef")}
          >
            <View>
              <Image
                source={require("../assets/images/beef.jpg")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
          </TouchableHighlight>
        </View>
        <View style={style.btn8}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("AsianLunchMeat")}
          >
            <View>
              <Image
                source={require("../assets/images/lunch_meat.jpg")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
          </TouchableHighlight>
        </View>
        <View style={style.btn8}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("AsianBnS")}
          >
            <View>
              <Image
                source={require("../assets/images/pork belly.jpg")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
          </TouchableHighlight>
        </View> */}
      </View>
    );
  }
}

const style = StyleSheet.create({
  basket: {
    left: 280,
    bottom: -5,
    backgroundColor: COLORS.secondary,
  },
  goBack: {
    flexDirection: "row",
    paddingHorizontal: 20,
    height: 25,
    width: 25,
    bottom: -40,
  },
  headerView: {
    backgroundColor: COLORS.secondary,
    padding: 10,
  },

  searchBar: {
    borderRadius: 25,
    borderColor: "#333",
    backgroundColor: "#fff",
  },

  renderSeaparatorView: {
    height: 1,
    width: "100%",
    backgroundColor: COLORS.primary,
  },

  renderView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    //marginTop: 40,
    backgroundColor: COLORS.secondary,
  },

  flatListView: {
    paddingVertical: 30,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    //backgroundColor: "#fff",
  },

  flatListText: {
    color: "#000",
    fontFamily: "SignikaNegative-SemiBold",
    fontSize: 16,
  },
  flatListSubCat: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: 14,
    marginLeft: 10,
  },

  titleText: {
    textAlign: "center",
    fontFamily: "SignikaNegative-Bold",
    fontSize: 30,
    color: COLORS.primary,
    top: 15,
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
    bottom: 500,
  },
  btn2: {
    alignItems: "flex-start",
    //marginTop: "62%",
    bottom: 550,
    left: 120,
  },
});

export default Asian;
