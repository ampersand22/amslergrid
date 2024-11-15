import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AmslerGridScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Amsler Grid</Text>
      <Text style={styles.subheader}>Kansal Eye, PLLC</Text>
      <TouchableOpacity onPress={() => Linking.openURL('mailto:receptionist.kansaleye@gmail.com')}>
        <Text style={styles.emailtop}>https://www.optassociates.com</Text>
      </TouchableOpacity>
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
    fontSize: 36,
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
    fontSize: 20
  },
  subheader: {
    textAlign: "center",
    fontSize: 16,
    paddingHorizontal: 20,
  },
  emailtop: {
    fontSize: 16,
    marginVertical: 5,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
