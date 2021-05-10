import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image
} from "react-native";

class Item extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.makeRemoteRequest()
    }

    makeRemoteRequest = async() => {
        const orderArray = await AsyncStorage.getItem('@order_Key');
        const parseOrderArray = JSON.parse(orderArray);
        const filterArray = parseOrderArray.filter((item) => item.qty !== 0);

        this.setState({
            data: filterArray
        })

        console.log(filterArray)
    } 

    getTotalPrice = () => {
        let total = this.state.data.reduce((a, b) => a + (b.total || 0), 0)

        return total.toFixed(2);
    }

    render() {
        return (
            <View style={style.renderView}>
                <FlatList 
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <View>
                            <Image
                                Image
                                source={{uri: item.picture}}
                            />
                            <Text style={{top: 10}}>
                                {`${item.name}\t`}{`${item.qty}\t`}{`${item.price}`}
                            </Text>
                        </View>
                    )}
                    keyExtractor={item => item.name}
                />
                <Text style={{}}>Total {this.getTotalPrice()}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    renderView: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 40,
    },
})

export default Item;