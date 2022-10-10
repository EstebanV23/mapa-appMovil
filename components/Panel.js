import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default ({ onPressLeft, textLeft, tooglePointsFilter }) => {
    return (
        <View style={styles.panel}>
            <Button onPress={onPressLeft} title={textLeft} />
            <Button title='Mostrar/Ocultar' onPress={ tooglePointsFilter }/>
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#eee'
    }
})