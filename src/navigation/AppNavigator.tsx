/*import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { FormScreen } from '../presentation/screnns/FormScreen';
import { PlanAmortizationScreen } from '../presentation/screnns/PlanAmortizationScreen';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Loan Form" component={FormScreen} />
      <Tab.Screen name="Amortization Plan" component={PlanAmortizationScreen} />
    </Tab.Navigator>
  );
};*/

/*import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { FormScreen } from '../presentation/screnns/FormScreen';
import { PlanAmortizationScreen } from '../presentation/screnns/PlanAmortizationScreen';


const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Loan Form') {
            iconName = 'document-text-outline'; // Cambia esto según el nombre del icono que desees
          } else if (route.name === 'Amortization Plan') {
            iconName = 'calendar-outline'; // Cambia esto según el nombre del icono que desees
          }

          // Puedes retornar cualquier componente que acepte 'color' y 'size' como props
          return <Icon name={iconName ?? ''} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Loan Form" component={FormScreen} />
      
      <Tab.Screen name="Amortization Plan" component={PlanAmortizationScreen} />
    </Tab.Navigator>
  );
};*/

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { FormScreen } from '../presentation/screnns/FormScreen';
import { PlanAmortizationScreen } from '../presentation/screnns/PlanAmortizationScreen';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Loan Form') {
            iconName = 'document-text-outline';
          } else if (route.name === 'Amortization Plan') {
            iconName = 'calendar-outline';
          }

          return <Icon name={iconName ?? ''} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Loan Form" component={FormScreen} />
      <Tab.Screen name="Amortization Plan" component={PlanAmortizationScreen} />
    </Tab.Navigator>
  );
};

