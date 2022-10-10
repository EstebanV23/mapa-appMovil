/* IMPORTAMOS TODAS LAS LIBRERIAS DE 'reaact' */
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
/* import MapView from 'react-native-maps'; */
/* FUNCIONA DE IGUAL FORMA CON EL .js y sin él */
import Map from './components/Map.js';
import Modal from './components/Modal.js';
import Panel from './components/Panel.js';

export default function App() {
    return (
        /* ENVOLVEMOS AL MapView DENTRO DE UN CONTENEDOR PARA ESTIRIZARLOS */
        <View style={styles.container}>
            {/* MAPA TRAIDO DE components/Map.js */}
            <Map/>

            {/* MODAL TRAIDO DE components/Modal.js */}
            <Modal/>

            {/* PANEL TRAIDO DE components/Panel.js */}
            <Panel/>
        </View>
    )
}

/* ESTILOS */
const styles = StyleSheet.create({
    /* ESTILOS PARA EL CONTAINER */
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    /* LOS ESTILOS DE map, center y modalView HAN SIDO LLEVADO A OTROS .js PARA SER RETORNADOS EN app.js */
    
});