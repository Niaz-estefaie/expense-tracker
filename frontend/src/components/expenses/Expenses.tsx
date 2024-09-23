import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import { useEffect } from "react";
import Income from "../incomes/Income";
import ExpenseForm from "../form/ExpenseForm";
import { ExpensesType } from "../../types/expense.type";

function Expenses() {
    const { getExpenses, expenses, deleteExpense, totalEsxpense } = useGlobalContext();

    useEffect(() => {
        getExpenses();
    }, [])

    return (
        <ExpensesStyled>
            <InnerLayout>
                <h1>Expense</h1>
                <h2 className="total-expense">Total Expense: <span>${totalEsxpense()}</span></h2>
                <div className="expense-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="expenses">
                        {expenses.map((expense: ExpensesType) => {
                            const { _id, title, amount, date, category, description } = expense;
                            return <Income key={_id} title={title} amount={amount} date={date} category={category} description={description} colorIndicator="var(--color-green)" id={_id} type="expense" deleteItem={deleteExpense} />;
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpensesStyled>
    )
}

const ExpensesStyled = styled.div`
    display: flex;
    overflow: auto;

    .expense-content{
        display: flex !important;
        gap: 2rem !important;
        .expenses {
            flex: 1 !important;
        }
    }
    .total-expense{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
`;

export default Expenses;