import React from 'react'
import {
    Text,
    FlatList,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native'
import filter from 'lodash.filter'
import Data from '../assets/store_items.json';
import { StyleSheet } from 'react-native';

class AsianMilk extends React.Component {
    state = {
        data: [],
        query: '',
        fullData: []
    }

    componentDidMount() {
        this.makeRemoteRequest()
    }

    makeRemoteRequest = () => {
        this.setState({
            data: Data[0].brand,
            fullData: Data[0].brand
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

    onclick_item(storeName) {
        switch (storeName) {
            case "Asian":
                this.props.navigation.navigate("Asian");
                //navigate
                break;
            case "Mendoza":
                this.props.navigation.navigate("Mendoza");
                //navigate
                break;
            case "European":
                this.props.navigation.navigate("European");
                //navigate
                break;
            default:
            //whatever you want
        }
    }

    render() {
        return (
        <View
            style={ style.renderView }>
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                    <View
                        style={ style.flatListView }>
                        <Text
                            category='s1'
                            style={ style.flatListText }>
                            {`${item.name}`}
                        </Text>
                    </View>
                    </TouchableOpacity>
                )}
                numColumns={2}
                keyExtractor={item => item.name}
                // ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader}
                ListFooterComponent={this.renderFooter}
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
        width: 140,
        height: 140
    }
});

export default AsianMilk;