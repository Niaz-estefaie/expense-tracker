import { createContext, ReactNode, FC, useState, useContext } from "react";
import axios from "axios";
import { IncomesType } from "../types/income.type";
import { ExpensesType } from "../types/expense.type";

const BASE_URL = "http://localhost:5000/api/v1";

interface GlobalContextType {
    addIncome: (income: IncomesType) => Promise<void>;
    getIncomes: () => Promise<void>;
    deleteIncome: (id: string) => Promise<void>;
    totalIncome: () => string | number;
    incomes: IncomesType[];
    addExpense: (expense: ExpensesType) => Promise<void>;
    getExpenses: () => Promise<void>;
    deleteExpense: (id: string) => Promise<void>;
    totalEsxpense: () => string | number;
    totalBalance: () => string | number;
    transactionHistory: () => ExpensesType | IncomesType[];
    expenses: ExpensesType[];
    error: string | null;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
    const [expenses, setExpenses] = useState<ExpensesType[]>([]);
    const [incomes, setIncomes] = useState<IncomesType[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleError = (err: any) => {
        setError(err.response?.data?.message || "Something went wrong");
    };

    const apiRequest = async (url: string, method: 'get' | 'post' | 'delete', data?: any) => {
        try {
            const response = await axios({ method, url, data });
            return response.data;
        } catch (err) {
            handleError(err);
        }
    };

    // Income
    const addIncome = async (income: IncomesType) => {
        await apiRequest(`${BASE_URL}/incomes`, 'post', income);
        getIncomes();
    };

    const getIncomes = async () => {
        const data = await apiRequest(`${BASE_URL}/incomes`, 'get');
        if (data) setIncomes(data);
    };

    const deleteIncome = async (id: string) => {
        await apiRequest(`${BASE_URL}/incomes/${id}`, 'delete');
        setIncomes(incomes.filter((income) => income._id !== id));
        getIncomes();
    }

    const totalIncome = () => {
        let currentIncome: string | number = 0;
        incomes.forEach((income) => {
            currentIncome += income.amount;
        });
        return currentIncome;
    }

    // Expense
    const addExpense = async (expense: ExpensesType) => {
        await apiRequest(`${BASE_URL}/expenses`, 'post', expense);
        getExpenses();
    };

    const getExpenses = async () => {
        const data = await apiRequest(`${BASE_URL}/expenses`, 'get');
        if (data) setExpenses(data);
    };

    const deleteExpense = async (id: string) => {
        await apiRequest(`${BASE_URL}/expenses/${id}`, 'delete');
        setExpenses(expenses.filter((expense) => expense._id !== id));
        getExpenses();
    }

    const totalEsxpense = () => {
        let currentExpense: string | number = 0;
        expenses.forEach((expense) => {
            currentExpense += expense.amount;
        });
        return currentExpense;
    }

    // General
    const totalBalance = (): string | number => (totalIncome() - totalEsxpense());

    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        return history
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 5);
    }

    return (
        <GlobalContext.Provider value={{
            addIncome, getIncomes, deleteIncome, totalIncome, addExpense, getExpenses, deleteExpense, totalEsxpense, totalBalance, transactionHistory, incomes, expenses, error
        }}>
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
