import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LoanContext} from '../hooks/useLoanCalculator';

export const LoanForm = () => {
  const [amount, setAmount] = useState('');
  const [annualInterestRate, setAnnualInterestRate] = useState('');
  const [termInYears, setTermInYears] = useState('');
  const [disbursementDate, setDisbursementDate] = useState('');
  const [error, setError] = useState('');

  const loanContext = useContext(LoanContext);
  const navigation = useNavigation();

  if (!loanContext) {
    return null;
  }

  const {calculateLoan} = loanContext;

  const handleSubmit = () => {
    if (!amount || !annualInterestRate || !termInYears || !disbursementDate) {
      setError('Todos los campos son obligatorios');
      return;
    }

    const loanDetails = {
      amount: parseFloat(amount),
      annualInterest: parseFloat(annualInterestRate),
      period: parseInt(termInYears, 10),
      date: new Date(disbursementDate),
    };

    calculateLoan(loanDetails);

    setAmount('');
    setAnnualInterestRate('');
    setTermInYears('');
    setDisbursementDate('');
    setError('');

  };

  return (
    <ScrollView>
      <View>
        <Text style={{color: 'black', marginLeft: 15}}>Monto:</Text>
        <TextInput
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          style={{
            backgroundColor: 'grey',
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
            margin: 15,
          }}
        />
        <Text style={{color: 'black', marginLeft: 15}}>
          Tasa de Interés Anual:
        </Text>
        <TextInput
          value={annualInterestRate}
          onChangeText={setAnnualInterestRate}
          keyboardType="numeric"
          style={{
            backgroundColor: 'grey',
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
            margin: 15,
          }}
        />
        <Text style={{color: 'black', marginLeft: 15}}>Plazo (años):</Text>
        <TextInput
          value={termInYears}
          onChangeText={setTermInYears}
          keyboardType="numeric"
          style={{
            backgroundColor: 'grey',
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
            margin: 15,
          }}
        />
        <Text style={{color: 'black', marginLeft: 15}}>
          Fecha de Desembolso:
        </Text>
        <TextInput
          value={disbursementDate}
          onChangeText={setDisbursementDate}
          style={{
            backgroundColor: 'grey',
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
            margin: 15,
          }}
        />
        {error ? (
          <Text style={{color: 'red', marginLeft: 15}}>{error}</Text>
        ) : null}
        <Pressable
          onPress={handleSubmit}
          style={{
            borderColor: 'green',
            alignItems: 'center',
            backgroundColor: 'green',
            borderRadius: 20,
            marginTop: 20,
          }}>
          <Text style={{color: 'black', fontSize: 30}}>Calcular</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};
