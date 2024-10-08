export interface IncomesType {
    _id: string;
    title: string;
    amount: string;
    date: Date;
    category: string;
    description: string;
    createdAt: string;
    type: string;
}

export interface IncomeComponentType {
    id: string;
    title: string;
    amount: string;
    date: Date;
    category?: string;
    description?: string;
    deleteItem?: any;
    colorIndicator?: string;
    type?: string;
}