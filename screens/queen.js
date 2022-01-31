import React, { Component } from "react";
import { View, Text, StyleSheet,Image } from "react-native";

export default class QueenScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>~~**Queen**~~</Text>
        
              <Image
                style={{ width: 1000, height: 534, marginBottom: 7 }}
                source={require('../assets/queen.jpg')}
              />
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  text: {
    color: "pink",
    fontSize: 25,
    fontStyle:"italic"
  }
});
