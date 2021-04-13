import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

const Login = () => {
    function renderLogin() {
        return (
            <View>
                <Text style={styles.textStyle}>LOGIN</Text>
            </View>
        )
    }

    return (
        <SafeAreaView>
            {renderLogin()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        position: 'absolute',
        width: 362,
        height: 29,
        left: 26,
        top: 110,

        fontFamily: 'SignikaNegative-Bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 60,
        lineHeight: 74,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: 0.005,

        color: '#FF9E45'
    }
})

export default Login;