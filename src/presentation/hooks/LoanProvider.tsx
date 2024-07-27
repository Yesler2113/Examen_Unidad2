import { ReactNode } from "react";
import { LoanContext, useLoanCalculator } from "./useLoanCalculator";

export const LoanProvider = ({ children }: { children: ReactNode }) => {
    const { planAmortization, calculateLoan } = useLoanCalculator();
  
    return (
      <LoanContext.Provider value={{ planAmortization, calculateLoan }}>
        {children}
      </LoanContext.Provider>
    );
};

