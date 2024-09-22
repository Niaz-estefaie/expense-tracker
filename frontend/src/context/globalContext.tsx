import React, { createContext, ReactNode, FC, useState, useContext } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";

interface GlobalContextType {
    addIncome: (income: any) => Promise<void>;
    getIncomes: () => Promise<void>;
    incomes: any[];
    error: string | null;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
    const [incomes, setIncomes] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    const addIncome = async (income: any) => {
        try {
            const response = await axios.post(`${BASE_URL}/income`, income);
            // setIncomes([...incomes, response.data]);
        } catch (err: any) {
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    const getIncomes = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/incomes`);
            setIncomes(response.data);
        } catch (err: any) {
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <GlobalContext.Provider value={{ addIncome, getIncomes, incomes, error }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
};
