/* IMPORTAMOS TODAS LAS LIBRERIAS DE 'reaact' */
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Modal } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
    return (
        /* ENVOLVEMOS AL MapView DENTRO DE UN CONTENEDOR PARA ESTIRIZARLOS */
        <View style={styles.container}>
            <MapView style={styles.map} />
            {/* MODAL */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={true}
            >
                <View style={styles.center}>
                    <View style={styles.modalView}>
                        <Text>Hola</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

/* ESTILOS */
const styles = StyleSheet.create({
    /* ESTILOS PARA EL MAPA Y SU CONTAINER */
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    /* ESTILOS PARA EL MODAL Y CENTER */
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    }
});