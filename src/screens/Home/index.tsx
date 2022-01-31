import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export function Home() {
    return (
        <View>
            <Text style={styles.container}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {      
      fontFamily: 'RobotoCondensed_700Bold'
    },
  });