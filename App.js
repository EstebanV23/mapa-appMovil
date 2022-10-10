/* IMPORTAMOS TODAS LAS LIBRERIAS DE 'reaact' */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
/* import MapView from 'react-native-maps'; */
/* FUNCIONA DE IGUAL FORMA CON EL .js y sin él */
import Map from './components/Map.js';
import Modal from './components/Modal.js';
/* import Panel from './components/Panel.js'; */

export default function App() {
    /* SOLO SE ACTIVA CUANDO NOSOTROS MANTENGAMOS PRESIOANDO EL DEDO SOBRE EL MAPA DURANTE UN TIEMPO */
    /* const handleLongPress = ({ nativeEvent }) => {
        console.log(nativeEvent);
    } */
    const [ puntos, setPuntos ] = useState([]);
    const handleLongPress = ({ nativeEvent }) => {
        /* GUARDA LOS PUNTOS */
        const newPuntos = puntos.concat({ coordinate: nativeEvent.coordinate});
        setPuntos(newPuntos);
    };
    console.log(puntos);
    return (
        /* ENVOLVEMOS AL MapView DENTRO DE UN CONTENEDOR PARA ESTIRIZARLOS */
        <View style={styles.container}>
            {/* MAPA TRAIDO DE components/Map.js Y LE ENVIAMOS LA FUNCION CREADA */}
            <Map onlongPress={handleLongPress}/>

            {/* MODAL TRAIDO DE components/Modal.js */}
            <Modal visiblility={true}>
                <Text>Hola Mundo</Text>
            </Modal>

            {/* PANEL TRAIDO DE components/Panel.js */}
            {/* EL PANEL ESTÁ VACIO POR LO TANTO GENERA UN ERROR, FALTA DIAPOSITIVA EN EL DOCUMENTO DEL PROFESOR */}
            {/* <Panel/> */}
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