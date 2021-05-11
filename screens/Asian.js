import React from "react";
import categoryData from "../assets/store_category.json";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Image,
  FlatList,
  SafeAreaView
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
      // <View style={styles.container}>
      //   {/*Header */}
      //   <View style={styles.header}>
      //     {/*Return Button */}
      //     <View style={styles.goBack}>
      //       <TouchableOpacity
      //         onPress={() => this.props.navigation.navigate("Home")}
      //       >
      //         <IconButton icon={icons.goBack} />
      //       </TouchableOpacity>
      //     </View>
      //     {/*Title Button */}
      //     <View>
      //       <Text style={styles.titleText}>Asian Family Market</Text>
      //     </View>
      //     {/*Checkout Button */}
      //     <View style={styles.checkout}>
      //       <TouchableOpacity
      //         onPress={() => this.props.navigation.navigate("Basket")}
      //       >
      //         <Image source={require("../assets/icons/BasketGreen.png")} />
      //       </TouchableOpacity>
      //     </View>
      //   </View>

      //   {/*Categories */}
      //   <View style={styles.sectionList}>
      //     <SectionList
      //       contentContainerStyle={{ paddingHorizontal: 10 }}
      //       stickySectionHeadersEnabled={false}
      //       sections={this.state.data}
      //       renderSectionHeader={({ section }) => (
      //         <>
      //           <TouchableOpacity
      //             // onPress={() => this.onclick_item(item.subCategory)}
      //           >
      //             <Text style={styles.sectonHeader}>{section.title}</Text>
      //             <FlatList
      //               data={section.data}
      //               horizontal
      //               renderItem={({ item }) => {
      //                 return <ListItem item={item} />;
      //               }}
      //               keyExtractor={(item, index) => index.toString()}
      //             />
      //           </TouchableOpacity>
      //         </>
      //       )}
      //       renderItem={({ item, section }) => {
      //         return null;
      //       }}
      //       keyExtractor={(item, index) => index.toString()}
      //     />
      //   </View>
      // </View>
      <View style={styles.container}>
      {/* <StatusBar style="light" /> */}
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={this.state.data}
          renderSectionHeader={({ section }) => (
            <>
              <Text>{section.title}</Text>
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                />
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

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={require("../assets/images/organic_produce.jpg")}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.type}</Text>
    </View>
  );
};

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

  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});

export default Asian;
