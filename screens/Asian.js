import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { COLORS, FONTS, icons, images } from "../constants";
import { IconButton } from "../components";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

class Asian extends React.Component {
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
              onPress={() => this.props.navigation.navigate("Item")}
            >
              <Image
                source={require("../assets/icons/BasketGreen.png")}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <SafeAreaView style={{ flex: 3 }}>
          <SectionList
            style={styles.sectionList}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={CATEGORIES}
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
      </View>
    );
  }
}

const CATEGORIES = [
  {
    title: "Dairy",
    data: [
      {
        type: "Milk",
        photo:
          "https://i.pinimg.com/originals/2a/63/fe/2a63fec9446820c83dad300b0ffb7855.png",
      },
      {
        type: "Eggs",
        photo:
          "https://www.clique.com.sg/wp-content/uploads/2020/07/DFSL0101.png",
      },
      {
        type: "Cheese",
        photo:
          "https://images.squarespace-cdn.com/content/v1/5a1592ff0abd04e470d48744/1512553461588-BZ9X4L2F5CINL2DU8QTF/ke17ZwdGBToddI8pDm48kPQujXO7frs1W7a77FZyt1F7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0prfa1Z6IeUrCPboCAmmHZn3ZVtqnTHXt-4Tm3byPSNDpHfFtqjKxWw0uc1YBtkl-w/Kaas.jpeg?format=2500w",
      },
    ],
  },
  {
    title: "Meat & Seafood",
    data: [
      {
        type: "Bacon & Sausage",
        photo:
          "https://shop.southchinaseas.ca/assets/images/chinesesausagefront.jpg",
      },
      {
        type: "Lunch Meat",
        photo:
          "https://chinafoodingredients.files.wordpress.com/2019/04/yingjinqian.jpeg",
      },
      {
        type: "Beef",
        photo:
          "https://cdn.shopify.com/s/files/1/0261/9123/3121/products/wagyuman-japanese-wagyu-beef-japanese-a5-wagyu-culotte-picanha-steak-cut-28186276102241_1200x.jpg?v=1619127753",
      },
    ],
  },
  {
    title: "Produce",
    data: [
      {
        type: "Fruits",
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWe7TH4pS9PE2WPlxqhvSFChuCjOE2srQjVQ&usqp=CAU",
      },
      {
        type: "Organic Produce",
        photo:
          "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/24172130/ING-spinach.jpg",
      },
      {
        type: "Vegetables",
        photo:
          "https://cdn.shopify.com/s/files/1/2858/6430/products/galangal_root_cut_1800x1800.png?v=1569298305",
      },
    ],
  },
  {
    title: "Soy",
    data: [
      {
        type: "Soybeans",
        photo:
          "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/feed/feednavigator.com/article/2017/12/22/limited-decrease-in-european-soybean-production-predicted/7685401-1-eng-GB/Limited-decrease-in-European-soybean-production-predicted_wrbm_large.jpg",
      },
      {
        type: "Beancurd skin",
        photo: "https://m.media-amazon.com/images/I/61oBngF0n7L._SL1001_.jpg",
      },
      {
        type: "Soy Milk",
        photo: "https://cdn01.sayweee.net/2020-11/y3fKhlrxT12_rHKTd4KKhw.jpg",
      },
    ],
  },
  {
    title: "Pork",
    data: [
      {
        type: "Fruits",
        photo: "/assets/images/fruits.jpg",
      },
      {
        type: "Organic Produce",
        photo: "/assets/images/organic_produce.jpg",
      },
      {
        type: "Vegetables",
        photo: "/assets/images/vegetables.jpg",
      },
    ],
  },
];

const ListItem = ({ item }) => {
  const navigation = useNavigation();
  function onclick_item(type) {
    console.log(type);
    switch (type) {
      case "Milk":
        navigation.navigate("AsianMilk");
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
      // whatever you want
    }
  }

  // console.log(item.type)
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onclick_item(item.type)}>
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
    fontSize: 25,
    fontFamily: "SignikaNegative-Bold",
    color: COLORS.primary,
    marginTop: "5%",
    marginLeft: "10%",
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
