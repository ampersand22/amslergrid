import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AmslerGridScreen from './screens/AmslerGridScreen';
import ClinicInfoScreen from './screens/ClinicInfoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 16 },  // Increase this value for larger text
        }}
      >
        <Tab.Screen name="Amsler Grid" component={AmslerGridScreen} />
        <Tab.Screen name="Kansal Eye Clinic Info" component={ClinicInfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
