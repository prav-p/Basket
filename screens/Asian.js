import React from "react";
import categoryData from "../assets/store_category.json";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Image,
  FlatList,
} from "react-native";
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

  ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };

  onclick_item(category) {
    switch (category) {
      case "AsianMilk":
        this.props.navigation.navigate("AsianMilk");
        //navigate
        break;
      case "AsianEggs":
        this.props.navigation.navigate("AsianEggs");
        //navigate
        break;
      case "AsianCheese":
        this.props.navigation.navigate("AsianCheese");
        //navigate
        break;
      case "AsianBnS":
        this.props.navigation.navigate("AsianAsianBnS");
        //navigate
        break;
      case "AsianLunchMeat":
        this.props.navigation.navigate("AsianLunchMeat");
        //navigate
        break;
      case "AsianFruits":
        this.props.navigation.navigate("AsianFruits");
        //navigate
        break;
      case "AsianOrganicProd":
        this.props.navigation.navigate("AsianOrganicProd");
        //navigate
        break;
      case "AsianVeg":
        this.props.navigation.navigate("AsianVeg");
        //navigate
        break;
      default:
      //whatever you want
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/*Header */}
        <View style={styles.header}>
          {/*Return Button */}
          <View style={styles.goBack}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <IconButton icon={icons.goBack} />
            </TouchableOpacity>
          </View>
          {/*Title Button */}
          <View>
            <Text style={styles.titleText}>Asian Family Market</Text>
          </View>
          {/*Checkout Button */}
          <View style={styles.checkout}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Basket")}
            >
              <Image source={require("../assets/icons/BasketGreen.png")} />
            </TouchableOpacity>
          </View>
        </View>

        {/*Categories */}
        <View style={styles.sectionList}>
          <SectionList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={this.state.data}
            renderSectionHeader={({ section }) => (
              <>
                <TouchableOpacity
                  onPress={() => this.onclick_item(item.subCategory)}
                >
                  <Text style={styles.sectonHeader}>{section.category}</Text>
                  <FlatList
                    data={section.data}
                    horizontal
                    renderItem={({ item }) => {
                      return <ListItem item={item} />;
                    }}
                  />
                </TouchableOpacity>
              </>
            )}
            renderItem={({ item, section }) => {
              return null;
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    color: COLORS.secondary,
    marginTop: 30,
  },
  goBack: {
    marginLeft: "3%",
    marginTop: "3%",
  },
  titleText: {
    fontSize: 30,
    fontFamily: "SignikaNegative-Bold",
    color: COLORS.primary,
    marginTop: "20%",
  },
  checkout: {
    marginRight: "3%",
  },
  sectionList: {
    flex: 6,
  },
  sectionHeader: {},
});
export default Asian;
