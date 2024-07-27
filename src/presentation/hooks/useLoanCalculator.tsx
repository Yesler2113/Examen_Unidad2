import { createContext, useState, ReactNode } from 'react';

interface LoanDetails {
  amount: number;
  annualInterest: number;
  period: number;
  date: Date;
}

interface PlanAmortization {
  month: number;
  interest: number;
  principal: number;
  balance: number;
  fullpayment: number;
  lifeInsuranceSVSD: number;
  lateInterest: number;
  totalPayment: number;
}

interface LoanContextProps {
  planAmortization: PlanAmortization[];
  calculateLoan: (detailsLoan: LoanDetails) => void;
}

export const LoanContext = createContext<LoanContextProps | undefined>(undefined);

export const useLoanCalculator = () => {
  const [planAmortization, setPlanAmortization] = useState<PlanAmortization[]>([]);

  const calculateLoan = (detailsLoan: LoanDetails) => {
    const { amount, annualInterest, period, date } = detailsLoan;
    const interestRate = annualInterest / 100 / 12;
    const totalPayments = period * 12;
    const fullpayment = amount * (interestRate / (1 - Math.pow(1 + interestRate, -totalPayments)));
    let balance = amount;
    let amortizationPlan: PlanAmortization[] = [];

    for (let i = 0; i < totalPayments; i++) {
      const interest = balance * interestRate;
      const principal = fullpayment - interest;
      balance -= principal;
      const lifeInsuranceSVSD = Math.max(balance * 0.0015, 2);
      const lateInterest = balance * (annualInterest / 100 / 2 / 360) * 30; 
      const totalPayment = fullpayment + lifeInsuranceSVSD + lateInterest;

      amortizationPlan.push({
        month: i + 1,
        interest,
        principal,
        balance,
        fullpayment,
        lifeInsuranceSVSD,
        lateInterest,
        totalPayment,
      });
    }
    setPlanAmortization(amortizationPlan);
  };

  return { planAmortization, calculateLoan };
};



