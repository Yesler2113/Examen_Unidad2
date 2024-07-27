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

