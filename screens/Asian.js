import React from "react";
import categoryData from "../assets/store_category";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons, images } from "../constants";
import { IconButton } from "../components";
import { Tabs } from "../navigation";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
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

  onclick_item(subCategory) {
    switch (subCategory) {
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
        <SafeAreaView style={{ flex: 3 }}>
          <SectionList
            style={styles.sectionList}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={this.state.data}
            renderSectionHeader={({ section }) => (
              <>
                <Text style={styles.sectionHeader}>{section.title}</Text>
                <FlatList
                  style={styles.flatlist}
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                />
                <View style={styles.renderSeaparatorView}></View>
              </>
            )}
            renderItem={({ item, section }) => {
              return null;
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
        <View>
          <Tabs style={{ flex: 1 }}></Tabs>
        </View>
      </View>
    );
  }
}

const ListItem = ({ item, i, subCategory }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => this.onclick_item(subCategory)}>
        <Image source={{ uri: item.photo }} style={styles.itemPhoto} />
      </TouchableOpacity>
      <Text style={styles.itemText}>{item.type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    //flex: 6,
    alignContent: "center",
  },

  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "black",
    marginTop: 20,
    marginBottom: 5,
    fontFamily: "SignikaNegative-Bold",
  },
  flatlist: {
    alignContent: "center",
    marginHorizontal: "5%",
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    flex: 1,
    width: 80,
    height: 80,
  },
  itemText: {
    color: "black",
    marginTop: 5,
    textAlign: "center",
    fontFamily: "SignikaNegative-Regular",
  },
  renderSeaparatorView: {
    height: 1,
    width: "100%",
    backgroundColor: COLORS.primary,
  },
});

export default Asian;
