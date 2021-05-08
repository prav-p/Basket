import React from "react";
import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import filter from "lodash.filter";
import Data from "../assets/store_items.json";
import { StyleSheet } from "react-native";
import { COLOR, COLORS } from "../constants";

class AsianMilk extends React.Component {
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
      data: Data[0].brand,
      fullData: Data[0].brand,
    });
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

  editOrder = (action, menuId, price) => {
    // const [orderItems, setOrderItems] = React.useState([]);
    // if (action == "+") {
    //     let orderList = orderItems.slice();
    //     let item = orderList.filter(a => a.menuId == menuId);
    //     if (item.length > 0) {
    //         let newQty = item[0].q
    //     }
    // } else {
    // }
  };

  render() {
    const { navigation } = this.props.navigation;
    return (
      <View style={style.renderView}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={style.flatListView}>
              <Text category="s1" style={style.flatListText}>
                {`${item.name}`}
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Basket")}
                style={{
                  width: 30,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopLeftRadius: 25,
                  borderBottomLeftRadius: 25,
                  // bottom: 400,
                  height: 30,
                  right: 110,
                }}
              >
                <Text>-</Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 30,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                  // bottom: 430,
                  height: 30,
                  // left: 50
                  right: 110,
                }}
              >
                <Text>5</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Basket")}
                style={{
                  width: 30,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopRightRadius: 25,
                  borderBottomRightRadius: 25,
                  // bottom: 460,
                  // left: 100,
                  height: 30,
                  right: 110,
                }}
              >
                <Text>+</Text>
              </TouchableOpacity>
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
    width: 90,
    height: 140,
  },
});

export default AsianMilk;
