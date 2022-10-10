/* IMPORTAMOS TODAS LAS LIBRERIAS DE 'reaact' */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
/* import MapView from 'react-native-maps'; */
/* FUNCIONA DE IGUAL FORMA CON EL .js y sin él */
import Map from './components/Map';
import Modal from './components/Modal';
import Input from './components/Input';
/* import Panel from './components/Panel.js'; */

export default function App() {
    
    const [ puntos, setPuntos ] = useState([]);//LE PASO UN ARREGLO
    const [ puntoTem, setpuntoTem ] = useState({});//LE PASO UN OBJETO
    const [ nombre, setNombre ] = useState('');//LE PASO UN STRING
    const [ visibility, setVisibility ] = useState(false);// LE PASO UN BOOLEAN
    
    /* SOLO SE ACTIVA CUANDO NOSOTROS MANTENGAMOS PRESIOANDO EL DEDO SOBRE EL MAPA DURANTE UN TIEMPO */
    const handleLongPress = ({ nativeEvent }) => {
        /* GUARDA LOS PUNTOS */
        /* const newPuntos = puntos.concat({ coordinate: nativeEvent.coordinate});
        setPuntos(newPuntos); */
        setpuntoTem(nativeEvent.coordinate);
        setVisibility(true);
    };

    const handleChangeText = text => {
        setNombre(text);
    }

    const handleSubmit = () => {
        const newPunto = {coordinate: puntoTem, name:nombre};
        setPuntos(puntos.concat(newPunto));
        setVisibility(false);
        setNombre('');
    }

    console.log(puntos);

    return (
        /* ENVOLVEMOS AL MapView DENTRO DE UN CONTENEDOR PARA ESTIRIZARLOS */
        <View style={styles.container}>
            {/* MAPA TRAIDO DE components/Map.js Y LE ENVIAMOS LA FUNCION CREADA */}
            <Map onlongPress={handleLongPress}/>

            {/* MODAL TRAIDO DE components/Modal.js */}
            <Modal visibility={visibility}>
                <Input title="Nombre" placeholder="Nombre del punto" onChangeText = { handleChangeText }/>
                <Button title="Aceptar" onPress={handleSubmit}/>
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