import React, { Component } from "react";
import { View, Text, StyleSheet,Image } from "react-native";

export default class KingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>||``/*King*/``||</Text>
        
       
              <Image
                style={{ width: 1300, height: 520, marginLeft: 7 }}
                source={require('../assets/king.png')}
              />
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  text: {
    color: "white",
    fontSize: 25,
    fontStyle:"italic"
  }
});
