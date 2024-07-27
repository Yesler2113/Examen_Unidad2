
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { LoanContext } from '../hooks/useLoanCalculator';

export const AmortizationPlan = () => {
  const loanContext = useContext(LoanContext);

  if (!loanContext) {
    return null; 
  }

  const { planAmortization } = loanContext;

  return (
    <ScrollView
    horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Mes</Text>
          <Text style={styles.headerText}>Principal</Text>
          <Text style={styles.headerText}>Interés</Text>
          <Text style={styles.headerText}>SVSD</Text>
          <Text style={styles.headerText}>Interés Moratorio</Text>
          <Text style={styles.headerText}>Cuota Total</Text>
          <Text style={styles.headerText}>Balance</Text>
        </View>
        <FlatList
          data={planAmortization}
          keyExtractor={(item) => item.month.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.text}>{item.month}</Text>
              <Text style={styles.text}>{item.principal.toFixed(2)}</Text>
              <Text style={styles.text}>{item.interest.toFixed(2)}</Text>
              <Text style={styles.text}>{item.lifeInsuranceSVSD.toFixed(2)}</Text>
              <Text style={styles.text}>{item.lateInterest.toFixed(2)}</Text>
              <Text style={styles.text}>{item.totalPayment.toFixed(2)}</Text>
              <Text style={styles.text}>{item.balance.toFixed(2)}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderBottomWidth: 1,
    marginLeft:10
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
    marginLeft: 25
    },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    margin:10
  },
  text: {
    textAlign: 'center',
    color: 'black',
    marginLeft:30
  },
});







