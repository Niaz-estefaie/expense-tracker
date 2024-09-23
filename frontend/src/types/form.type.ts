export interface FormState {
    title: string;
    amount: string;
    date: Date | null;
    category: string;
    description: string;
}

export type CategoryType = 'salary' | 'freelancing' | 'investment' | 'stocks' | 'bitcoin' | 'bank' | 'youtube' | 'other';

export type ExpenseCategoryType = 'education' | 'groceries' | 'health' | 'subscriptions' | 'takeaways' | 'clothing' | 'travelling' | 'other';
