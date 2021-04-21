import React from "react";
import { COLORS, icons } from "../constants";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Icon,
  Keyboard,
  FlatList,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Home = () => {
  const navigation = useNavigation();

  function renderBasket() {
    return (
      <View style={style.basket}>
        <TouchableOpacity onPress={() => navigation.navigate("Basket")}>
          <Image source={icons.basketG}></Image>
        </TouchableOpacity>
      </View>
    );
  }
  function renderGreeting() {
    return (
      <View style>
        <Text style={style.greetingText}>Hello there</Text>
      </View>
    );
  }
  function renderSearchBar() {
    state = {
      search: "",
    };
    updateSearch = (search) => {
      this.setState({ search });
    };
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
  return (
    <SafeAreaView>
      {renderGreeting()}
      {renderBasket()}
      {renderSearchBar()}
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  basket: {
    flex: 1,
    left: 300,
    top: -55,
  },
  greetingText: {
    top: 70,
    fontFamily: "SignikaNegative-Bold",
    textAlign: "center",
    fontSize: RFValue(70, 896),
    color: COLORS.primary,
  },
});

export default Home;
