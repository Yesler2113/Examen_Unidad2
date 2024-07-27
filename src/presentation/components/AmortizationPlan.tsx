// AmortizationPlan.tsx
import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { LoanContext } from '../hooks/useLoanCalculator';

export const AmortizationPlan = () => {
  const loanContext = useContext(LoanContext);

  if (!loanContext) {
    return null; // Maneja el error de manera adecuada
  }

  const { planAmortization } = loanContext;

  return (
    <View>
      <FlatList
        data={planAmortization}
        keyExtractor={(item) => item.month.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={{color: 'black'}}>Mes: {item.month}</Text>
            <Text style={{color: 'black'}}>Principal: {item.principal.toFixed(2)}</Text>
            <Text style={{color: 'black'}}>Interés: {item.interest.toFixed(2)}</Text>
            <Text style={{color: 'black'}}>SVSD: {item.lifeInsuranceSVSD.toFixed(2)}</Text>
            <Text style={{color: 'black'}}>Interés Moratorio: {item.lateInterest.toFixed(2)}</Text>
            <Text style={{color: 'black'}}>Cuota Total: {item.totalPayment.toFixed(2)}</Text>
            <Text style={{color: 'black'}}>Balance: {item.balance.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
};






