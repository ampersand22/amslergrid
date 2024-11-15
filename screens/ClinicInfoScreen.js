import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, Image } from 'react-native';

export default function ClinicInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.spacer}></Text>
      <Text style={styles.info}>Dr. Rishav Kansal</Text>
      <Text style={styles.info}>770 N. Coit Road Suite 2486</Text>
      <Text style={styles.info}>Richardson, Tx 75080</Text>
      <Text style={styles.info}>Phone: 972-690-1922</Text>
      <Text style={styles.info}>Fax: 972-235-0168</Text>
      
      <Text style={styles.body}>To schedule an appointment, please call the office phone number, or you can contact Kansal Eye at: </Text>
      <TouchableOpacity onPress={() => Linking.openURL('mailto:receptionist.kansaleye@gmail.com')}>
        <Text style={styles.email}>receptionist@optassociates.com</Text>
      </TouchableOpacity>

      
      {/* Clinic Image */}
      <Image
        source={require('../assets/drkansal1.jpg')}
        style={styles.clinicImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 12

  },
  info: {
    fontSize: 16,
    marginVertical: 1,
  },
  email: {
    fontSize: 16,
    marginVertical: 5,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  clinicImage: {
    width: 300,     
    height: 400,     
    marginTop: 20,
    borderRadius: 10,
  },
  body: {
    fontSize: 16,
    marginVertical: 5,
    padding: 16,
  },
  spacer: {
    paddingTop: 40
  }
});
