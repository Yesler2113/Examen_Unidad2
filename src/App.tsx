// src/App.tsx
// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './navigation/AppNavigator';
import { LoanProvider } from './presentation/hooks/LoanProvider';

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


