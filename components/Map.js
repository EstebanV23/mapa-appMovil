import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView from 'react-native-maps';

export default ({ onlongPress }) => {
    return (
        <MapView
            style={styles.map}
            onLongPress={onlongPress}
        /> 
    )
}

/* ESTILOS */
const styles = StyleSheet.create({
    /* ESTILOS PARA EL MAPA */
    map: {
        /*  */
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});