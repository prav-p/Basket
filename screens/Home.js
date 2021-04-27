import React from 'react'
import {
    Text,
    FlatList,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native'
import filter from 'lodash.filter'
import Data from '../assets/stores.json';
import { StyleSheet } from 'react-native';

class Home extends React.Component {
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
            data: Data,
            fullData: Data
        });
    }

    contains = ({ storeName, storeLocation }, query) => {
        if (
            storeName.toUpperCase().includes(query) ||
            storeLocation.toUpperCase().includes(query)
        ) {
        return true
        }
        return false
    }

    handleSearch = text => {
        const formattedQuery = text.toUpperCase()
        const data = filter(this.state.fullData, store => {
            return this.contains(store, formattedQuery)
        })
        this.setState({ data, query: text })
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

    render() {
        const { navigate } = this.props.navigation;
        return (
        <View
            style={ style.renderView }>
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigate("Search")}>
                    <View
                        style={ style.flatListView }>
                        <Text
                            category='s1'
                            style={ style.flatListText }>
                            {`${item.storeName} ${item.storeLocation}`}
                        </Text>
                    </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.storeLocation}
                ItemSeparatorComponent={this.renderSeparator}
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
        alignItems: 'center'
    },

    flatListText: {
        color: '#000'
    }
});

export default Home;
