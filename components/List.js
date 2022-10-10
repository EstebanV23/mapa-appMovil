import React from 'react';
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from 'react-native';

export default ({ puntos }) => {
    return (
        <>
            <View style={styles.list}>
                <FlatList
                    data={puntos.map(x => x.name)}
                    renderItems={({ item }) => <Text style={styles.item}>{item}</Text>}
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.button}>
                <Button title='Cerrar'/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    list: {
        height: Dimensions.get('window').height - 150,
    },
    button: {
        paddingBottom: 15
    },
    item:{
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 50,
        justifyContent: 'center',
        padding: 15
    }
    
})