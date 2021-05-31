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

class Mendoza extends React.Component {
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
            <Text style={styles.titleText}>Mendoza's Mexican Mercado</Text>
          </View>
          {/*Checkout Button */}
          <View style={styles.checkout}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Item")}
            >
              <Image
                source={require("../assets/icons/BasketGreen.png")}
                style={{ width: 35, height: 35 }}
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
        type: "Cheese",
        photo:
          "https://s.yimg.com/aah/mex-grocer/queso-panela-el-mexicano-whole-milk-cheese-pack-of-3-6.gif",
      },
    ],
  },
  {
    title: "Snacks",
    data: [
      {
        type: "Chocolate",
        photo:
          "https://s.yimg.com/aah/mex-grocer/abuelita-chocolate-by-nestle-10-mini-tablets-10.gif",
      },
      {
        type: "Saladitos",
        photo:
          "https://s.yimg.com/aah/mex-grocer/saladitos-salted-plums-apricots-11.gif",
      },
      {
        type: "Candies",
        photo:
          "https://s.yimg.com/aah/mex-grocer/bandera-de-coco-coconut-candy-14-1-oz-10.gif",
      },
    ],
  },

  {
    title: "Pantry",
    data: [
      {
        type: "Spices",
        photo:
          "https://s.yimg.com/aah/mex-grocer/other-spices-and-seasonings-9.gif",
      },
      {
        type: "Canned",
        photo:
          "https://s.yimg.com/aah/mex-grocer/canned-beans-pinto-black-and-refried-beans-11.gif",
      },
      {
        type: "Flour",
        photo:
          "https://s.yimg.com/aah/mex-grocer/maseca-yellow-corn-flour-71.gif",
      },
    ],
  },

  {
    title: "Salsas & Mole",
    data: [
      {
        type: "Salsas",
        photo: "https://s.yimg.com/aah/mex-grocer/salsa-mexican-salsas-16.gif",
      },
      {
        type: "Mole",
        photo: "https://s.yimg.com/aah/mex-grocer/mole-sauce-14.gif",
      },
    ],
  },
  {
    title: "Dry",
    data: [
      {
        type: "Beans",
        photo:
          "https://s.yimg.com/aah/mex-grocer/dried-beans-black-beans-pinto-beans-and-more-11.gif",
      },
      {
        type: "Pasta",
        photo:
          "https://s.yimg.com/aah/mex-grocer/mexican-pasta-products-11.gif",
      },
      {
        type: "Rice",
        photo:
          "https://s.yimg.com/aah/mex-grocer/rice-risotto-quinoa-couscous-6.gif",
      },
      {
        type: "Tortillas & Tamales",
        photo: "https://s.yimg.com/aah/mex-grocer/tamales-tamale-13.gif",
      },
    ],
  },
];

const ListItem = ({ item }) => {
  const navigation = useNavigation();
  function onclick_item(type) {
    switch (type) {
      case "Milk":
        navigation.navigate("MendozaMilk");
        //navigate
        break;
      case "Cheese":
        navigation.navigate("MendozaCheese");
        //navigate
        break;
      case "Chocolate":
        navigation.navigate("MendozaChoco");
        //navigate
        break;
      case "Saladitos":
        navigation.navigate("MendozaSaladitos");
        //navigate
        break;
      case "Candies":
        navigation.navigate("MendozaCandies");
        //navigate
        break;
      case "Spices":
        navigation.navigate("MendozaSpices");
        //navigate
        break;
      case "Canned":
        navigation.navigate("MendozaCanned");
        //navigate
        break;
      case "Flour":
        navigation.navigate("MendozaFlour");
        //navigate
        break;
      case "Salsas":
        navigation.navigate("MendozaSalsa");
        //navigate
        break;
      case "Mole":
        navigation.navigate("MendozaMole");
        //navigate
        break;
      case "Beans":
        navigation.navigate("MendozaBeans");
        //navigate
        break;
      case "Pasta":
        navigation.navigate("MendozaPasta");
        //navigate
        break;
      case "Rice":
        navigation.navigate("MendozaRice");
        //navigate
        break;
      case "Tortillas & Tamales":
        navigation.navigate("MendozaTT");
        //navigate
        break;
      default:
      // whatever you want
    }
  }

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
    fontSize: 20,
    fontFamily: "SignikaNegative-Bold",
    color: COLORS.primary,
    marginTop: "5%",
    marginLeft: "10%",
    left: 5,
  },
  checkout: {
    marginRight: "3%",
  },
  sectionList: {
    //flex: 6,
    alignContent: "center",
  },

  sectionHeader: {
    fontWeight: "400",
    fontSize: 16,
    color: "black",
    marginTop: 20,
    marginBottom: 5,
    fontFamily: "Montserrat-Bold",
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

export default Mendoza;
