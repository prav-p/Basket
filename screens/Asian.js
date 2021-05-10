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

          <View>
            <Text style={styles.titleText}>Asian Family Market</Text>
          </View>

          <View style={styles.checkout}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Basket")}
            >
              <Image source={require("../assets/icons/BasketGreen.png")} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sectionList}>
          <SectionList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={this.state.data}
            renderSectionHeader={({ section }) => (
              <>
                <Text style={styles.sectonHeader}>{section.category}</Text>
                <FlatList
                  data={section.data}
                  horizontal
                  renderItem={({ item }) => {
                    return <ListItem item={item} />;
                  }}
                />
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
    //backgroundColor: COLORS.secondary,
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
