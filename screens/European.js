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

class European extends React.Component {
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
            <Text style={styles.titleText}>European Foods</Text>
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
        type: "Butter",
        photo:
          "https://www.europeangrocerystore.com/sites/default/files/styles/product_main_page/public/images/products/Meggle-Alpenbutter-250g.jpg?itok=oazlDUjX",
      },
      {
        type: "Milk",
        photo:
          "https://www.europeangrocerystore.com/sites/default/files/styles/product_main_page/public/images/products/F180006407.jpg?itok=GuYP5yQ9",
      },
      {
        type: "Cheese",
        photo:
          "https://www.europeangrocerystore.com/sites/default/files/styles/product_main_page/public/images/products/Adler%20Sahne_0.png?itok=GSv_TbCV",
      },
    ],
  },
  {
    title: "Snacks",
    data: [
      {
        type: "Chocolate",
        photo:
          "https://www.europeangrocerystore.com/sites/default/files/styles/product_main_page/public/images/products/Ritter-Butter-Biscuit.jpg?itok=LEB9Mdos",
      },
      {
        type: "Cookies",
        photo:
          "https://www.europeangrocerystore.com/sites/default/files/styles/product_main_page/public/images/products/7393560446A.jpg?itok=_OV9E5-W",
      },
      {
        type: "Candies",
        photo:
          "https://www.europeangrocerystore.com/sites/default/files/styles/product_main_page/public/images/products/Polka-Mints-Nordic-Sweets.jpg?itok=7YAg2ZHt",
      },
    ],
  },

  {
    title: "Pantry",
    data: [
      {
        type: "Cereal",
        photo:
          "https://www.europeangrocerystore.com/sites/default/files/styles/product_main_page/public/images/products/Dr.%20oetker%20Vitalis%20Schoko%20Duo%20Muesli.jpg?itok=3YYXO40l",
      },
      {
        type: "Pasta",
        photo:
          "https://www.europeangrocerystore.com/sites/default/files/styles/product_main_page/public/images/products/Bechtle-Bavarian-Style-Spae.jpg?itok=ZNPZT84U",
      },
      {
        type: "Flour",
        photo:
          "https://www.europeangrocerystore.com/sites/default/files/styles/product_main_page/public/images/products/Dr%20Oetker-%20Pfannkuchen%20190g.png?itok=nMtibzW8",
      },
    ],
  },

  {
    title: "Preserved & Canned",
    data: [
      {
        type: "Herring",
        photo:
          "https://www.europeangrocerystore.com/sites/default/files/styles/product_main_page/public/images/products/Herring-Paprika-Creme.jpg?itok=6YYA1k_7",
      },
      {
        type: "Jam",
        photo:
          "https://www.europeangrocerystore.com/sites/default/files/styles/product_main_page/public/images/products/schwartau-extra-pflaumenmus-330g_grande.jpg?itok=X7VtK1Ah",
      },
      {
        type: "Vegetables",
        photo:
          "https://www.europeangrocerystore.com/sites/default/files/styles/product_main_page/public/images/products/817u2PQMlqL._SY550_.jpg?itok=bxBUNtL8",
      },
    ],
  },
  {
    title: "Condiments",
    data: [
      {
        type: "Mustard",
        photo:
          "https://cdn.shopify.com/s/files/1/0561/3553/products/FR-496_Edmond_Fallot_French_Dijon_Mustard_512x.jpg?v=1584703895",
      },
      {
        type: "Ketchup",
        photo:
          "https://cdn.shopify.com/s/files/1/0561/3553/products/DE-291_512x.jpg?v=1601480432",
      },
      {
        type: "Honey",
        photo:
          "https://cdn.shopify.com/s/files/1/0561/3553/products/DE-1178_512x.jpg?v=1578870648",
      },
    ],
  },
];

const ListItem = ({ item }) => {
  const navigation = useNavigation();
  function onclick_item(type) {
    console.log(type);
    switch (type) {
      case "Butter":
        navigation.navigate("EuroButter");
        //navigate
        break;
      case "Milk":
        navigation.navigate("EuroMilk");
        //navigate
        break;
      case "Cheese":
        navigation.navigate("EuroCheese");
        //navigate
        break;
      case "Chocolate":
        navigation.navigate("EuroChocolate");
        //navigate
        break;
      case "Cookies":
        navigation.navigate("EuroCoWaf");
        //navigate
        break;
      case "Candies":
        navigation.navigate("EuroGummies");
        //navigate
        break;
      case "Cereal":
        navigation.navigate("EuroCereal");
        //navigate
        break;
      case "Pasta":
        navigation.navigate("EuroPasta");
        //navigate
        break;
      case "Flour":
        navigation.navigate("EuroFlour");
        //navigate
        break;
      case "Herring":
        navigation.navigate("EuroHerring");
        //navigate
        break;
      case "Jam":
        navigation.navigate("EuroJam");
        //navigate
        break;
      case "Vegetables":
        navigation.navigate("EuroVeg");
        //navigate
        break;
      case "Mustard":
        navigation.navigate("EuroMustard");
        //navigate
        break;
      case "Ketchup":
        navigation.navigate("EuroKetchup");
        //navigate
        break;
      case "Honey":
        navigation.navigate("EuroHoney");
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
    left: 10,
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

export default European;
