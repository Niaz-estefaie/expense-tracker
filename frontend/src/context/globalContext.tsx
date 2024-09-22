import React, { createContext, ReactNode, FC, useState, useContext } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";

interface GlobalContextType {
    // Add properties and functions here as needed
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
    const contextValue: GlobalContextType = {
    };

    const [incomes, setIncomes] = useState([]);
    const [exoenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    const addIncome = async (income: any) => {
        const response = await axios.post(`${BASE_URL}/income`)
            .catch((error) => {
                setError(error.response.data.message)
            })

    }

    return (
        <GlobalContext.Provider value={{addIncome}}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
