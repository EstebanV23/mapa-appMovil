import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from 'react-native-maps';

export default ({ onlongPress, puntos, pointsFilter }) => {
    return (
        <MapView
            style={styles.map}
            onLongPress={onlongPress}
        >
            {pointsFilter && puntos.map(x =>
                <Marker
                    key={x.name}
                    coordinate={x.coordinate}
                    title={x.name}
                />)}
        </MapView> 
    )
}

/* ESTILOS */
const styles = StyleSheet.create({
    /* ESTILOS PARA EL MAPA */
    map: {
        /*  */
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 60,
        marginTop: 40
    },
});