import { createContext, ReactNode, FC, useState, useContext } from "react";
import axios from "axios";
import { IncomesType } from "../types/income.type";

const BASE_URL = "http://localhost:5000/api/v1";

interface GlobalContextType {
    addIncome: (income: any) => Promise<void>;
    getIncomes: () => Promise<void>;
    deleteIncome: (id: string) => Promise<void>;
    totalIncome: () => string | number;
    incomes: any[];
    error: string | null;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
    const [incomes, setIncomes] = useState<IncomesType[]>([]);
    const [error, setError] = useState<string | null>(null);

    const addIncome = async (income: any) => {
        try {
            await axios.post(`${BASE_URL}/income`, income);
            getIncomes();
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

    const deleteIncome = async (id: string) => {
        try {
            await axios.delete(`${BASE_URL}/income/${id}`);
            setIncomes(incomes.filter((income) => income._id !== id));
            getIncomes();
        }
        catch (err: any) {
            setError(err.response?.data?.message || "Something went wrong");
        }
    }

    const totalIncome = () => {
        let currentIncome: string | number = 0;
        incomes.forEach((income) => {
            currentIncome += income.amount;
        });
        return currentIncome;
    }

    return (
        <GlobalContext.Provider value={{ addIncome, getIncomes, deleteIncome, totalIncome, incomes, error }}>
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
