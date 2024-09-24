export interface ExpensesType {
    _id: string;
    title: string;
    amount: string;
    date: Date;
    category: string;
    description: string;
    createdAt: string;
}

export interface ExpenseComponentType {
    id: string;
    title?: string;
    amount?: string;
    date?: Date;
    category?: string;
    description?: string;
    deleteItem?: any;
    colorIndicator?: string;
    type?: string;
}