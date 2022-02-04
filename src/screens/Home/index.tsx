import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from './styles';

export function Home() {
    return (
        <View>
            <Text style={Styles.title}>MEUS CARDÁPIOS</Text>
            <Text style={Styles.text}>Todos os seus cardápios na palma da mão.</Text>
        </View>
    )
}