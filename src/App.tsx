// src/App.tsx
// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './navigation/AppNavigator';
import { LoanProvider } from './presentation/hooks/LoanProvider';
import IonIcon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <LoanProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </LoanProvider>
  );
};

export default App;


