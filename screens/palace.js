import React, { Component } from "react";
import { View, Text, StyleSheet,Image } from "react-native";

export default class PalaceScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>//^^Palace^^//</Text>
        
              <Image
                style={{ width: 1300, height: 520, marginLeft: 7 }}
                source={require('../assets/palace.jpg')}
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
    backgroundColor: "lightgreen"
  },
  text: {
    color: "blue",
    fontSize: 25,
    fontStyle:"italic"
  }
});
