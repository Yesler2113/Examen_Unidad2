// LoanForm.tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { LoanContext } from '../hooks/useLoanCalculator';

export const LoanForm = () => {
  const [amount, setAmount] = useState('');
  const [annualInterestRate, setAnnualInterestRate] = useState('');
  const [termInYears, setTermInYears] = useState('');
  const [disbursementDate, setDisbursementDate] = useState('');

  const loanContext = useContext(LoanContext);

  if (!loanContext) {
    return null; // o maneja el error de manera adecuada
  }

  const { calculateLoan } = loanContext;

  const handleSubmit = () => {
    const loanDetails = {
      amount: parseFloat(amount),
      annualInterest: parseFloat(annualInterestRate),
      period: parseInt(termInYears, 10),
      date: new Date(disbursementDate)
    };

    // Llama a la función calculateLoan del contexto
    calculateLoan(loanDetails);
  };

  return (
    <View style={{ backgroundColor: 'black' }}>
      <Text>Monto:</Text>
      <TextInput value={amount} onChangeText={setAmount} keyboardType="numeric" />
      <Text>Tasa de Interés Anual:</Text>
      <TextInput value={annualInterestRate} onChangeText={setAnnualInterestRate} keyboardType="numeric" />
      <Text>Plazo (años):</Text>
      <TextInput value={termInYears} onChangeText={setTermInYears} keyboardType="numeric" />
      <Text>Fecha de Desembolso:</Text>
      <TextInput value={disbursementDate} onChangeText={setDisbursementDate} />
      <Pressable onPress={handleSubmit} style={{ borderColor: 'green' }}>
        <Text>Calcular</Text>
      </Pressable>
    </View>
  );
};










