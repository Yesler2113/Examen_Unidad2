import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
};

