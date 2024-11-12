import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function AmslerGridScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kansal Eye - Amsler Grid</Text>
      <Image source={require('../assets/amslergrid.png')} style={styles.gridImage} />

      <Text style={styles.instructions}>
        Focus on the center dot and note any distortions or blurriness.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  gridImage: {
    width: 300,
    height: 300,
  },
  instructions: {
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
