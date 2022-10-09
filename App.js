/* IMPORTAMOS TODAS LAS LIBRERIAS DE 'reaact' */
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return(
    /* ENVOLVEMOS AL MapView DENTRO DE UN CONTENEDOR PARA ESTIRIZARLOS */
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  )
}

/* ESTILOS */
const styles = StyleSheet.create({
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
});