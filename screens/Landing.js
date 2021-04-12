import React from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
} from "react-native";
import { images } from "../constants";

const Landing = () =>{
    return (
        <ImageBackground
        style={style.img}
        source = {images.landing}>

        </ImageBackground>
    )
}

const style = StyleSheet.create ({
    img: {
        flex: 1,
        resizeMode:"stretch",
    }
})

export default Landing;