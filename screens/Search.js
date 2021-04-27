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

class Search extends React.Component {
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
        <View
            style={{
                backgroundColor: '#fff',
                padding: 10,
        }}>
        <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleSearch}
                status='info'
                placeholder='Search'
                style={{
                    borderRadius: 25,
                    borderColor: '#333',
                    backgroundColor: '#fff'
                }}
                textStyle={{ color: '#000' }}
                clearButtonMode='always'
        />
        </View>
    )

    renderSeparator = () => {
        return (
        <View
            style={{
            height: 1,
            width: '86%',
            backgroundColor: '#CED0CE',
            marginLeft: '5%'
            }}
        />
        )
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
        <View
            style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 20,
            marginTop: 40
            }}>
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                    <View
                        style={{
                        flexDirection: 'row',
                        padding: 16,
                        alignItems: 'center'
                        }}>
                        <Text
                        category='s1'
                        style={{
                            color: '#000'
                        }}>{`${item.storeName} ${item.storeLocation}`}</Text>
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

export default Search;