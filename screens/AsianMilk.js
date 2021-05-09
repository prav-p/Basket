import React from 'react'
import {
    Text,
    FlatList,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    TouchableNativeFeedback
} from 'react-native'
import filter from 'lodash.filter'
import Data from '../assets/store_items.json';
import orderData from '../assets/order_list.json';
import { StyleSheet } from 'react-native';
import { COLOR, COLORS } from "../constants";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("BasketDB");

class AsianMilk extends React.Component {
    state = {
        data: [],
        query: '',
        fullData: [],
        orderItems: []
    }

    componentDidMount() {
        this.makeRemoteRequest()
    }

    makeRemoteRequest = () => {
        this.setState({
            data: Data[0].brand,
            fullData: Data[0].brand,
            orderItems: orderData
          });
    }

    contains = ({name}, query) => {
        if (
            name.toUpperCase().includes(query)
        ) {
            return true
        }
        return false
    }

    handleSearch = text => {
        const formattedQuery = text.toUpperCase()
        const data = filter(this.state.fullData, item => {
            console.log(this.contains(item, formattedQuery));
            return this.contains(item, formattedQuery)
        })
        this.setState({ data, query: text })
        console.log(this.state.fullData[0].brand)
    }

    renderHeader = () => (
        <View style={ style.headerView }>
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleSearch}
                status='info'
                placeholder='Search'
                style={ style.searchBar }
                textStyle={{ color: '#000' }}
                clearButtonMode='always'
            />
        </View>
    )

    renderSeparator = () => {
        return (
            <View
                style={ style.renderSeaparatorView }
            />
        )
    }

    editOrder = (action, name, price) => {
        let orderList = this.state.orderItems.slice();
        let item = orderList.filter(a => a.name == name);

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1;
                item[0].qty = newQty;
                item[0].total = item[0].qty * price;
            } else {
                const newItem = {
                    name: name,
                    qty: 1,
                    price: price,
                    total: price
                }

                orderList.push(newItem);
            }

            this.setState({
                orderItems: orderList
            })

            console.log(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1;
                    item[0].qty = newQty;
                    item[0].total = newQty * price;
                }
            }

            this.setState({
                orderItems: orderList
            })

            console.log(orderList)
        }
    }

    getOrderQty = (name) => {
        let orderItem = this.state.orderItems.filter(a => a.name == name);

        if (orderItem.length > 0) {
            return orderItem[0].qty;
        } 

        return 0;
    }

    render() {
        return (
        <View
            style={ style.renderView }>
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <View
                        style={ style.flatListView }>
                        <Text
                            category='s1'
                            style={ style.flatListText }>
                            {`${item.name}`}
                        </Text>
                        <TouchableOpacity 
                            onPress={() => this.editOrder("-", item.name, item.price)}
                            style={{
                                width: 30,
                                backgroundColor: COLORS.white,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopLeftRadius: 25,
                                borderBottomLeftRadius: 25,
                                // bottom: 400,
                                height: 30,
                                right: 110
                            }} 
                        >
                            <Text>-</Text>
                        </TouchableOpacity>
                        <View 
                            style={{
                                width: 30,
                                backgroundColor: COLORS.white,
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 30,
                                right: 110
                            }}
                        >
                            <Text>{this.getOrderQty(item.name)}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.editOrder("+", item.name, item.price)}
                            style={{
                                width: 30,
                                backgroundColor: COLORS.white,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopRightRadius: 25,
                                borderBottomRightRadius: 25,
                                height: 30,
                                right: 110
                            }}
                        >
                            <Text>+</Text>

                        </TouchableOpacity>
                    </View>
                )}
                numColumns={2}
                keyExtractor={item => item.name}
                ListHeaderComponent={this.renderHeader}
            />
        </View>
        )
    }
}

const style = StyleSheet.create({
    headerView: {
        backgroundColor: '#fff',
        padding: 10
    },

    searchBar: {
        borderRadius: 25,
        borderColor: '#333',
        backgroundColor: '#fff'
    },

    renderSeaparatorView: {
        height: 1,
        width: '86%',
        backgroundColor: '#CED0CE',
        marginLeft: '5%'
    },

    renderView: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 40
    },

    flatListView: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
    },

    flatListText: {
        color: '#000',
        width: 90,
        height: 140,
        
    }
});

export default AsianMilk;