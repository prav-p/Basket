import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View,ImageBackground } from 'react-native';
import Background from './assets/landing.png';

export default class App extends React.Component {
  render() {
    return (
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
        
        <ImageBackground source={Background} style={styles.backgroundImage}>
        <View style ={{flex: 3}} />
        <Text style={styles.h1}>Basket</Text>
        <View style ={{flex: 1}} />
        {<Button
        title="LOGIN"
        style={styles.button}
        onPress={() => this.onPress()}
        
        /> }
         <View style ={{flex: 1}} />
        {<CreateButton
        title="Create an Account"
        style={styles.button}
        onPress={() => this.onPress()}
        
        /> }
        </ImageBackground>
        
        
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    //alignItems: 'center',
    //justifyContent: 'space-between',
    //width: '100%',
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  h1: {
    color: '#FF9E45',
    fontSize:60,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign:'center',
     
    

  },
   CreateButton: {
     color: 'transparent',
     justifyContent: "center",
     borderRadius: 20,
     borderColor: '#FF9E45',
    
   }
});
