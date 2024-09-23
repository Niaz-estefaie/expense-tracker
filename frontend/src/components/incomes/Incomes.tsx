import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../form/Form";
import { useEffect } from "react";
import { IncomesType } from "../../types/income.type";
import Income from "./Income";

function Incomes() {
    const { getIncomes, incomes, deleteIncome, totalIncome } = useGlobalContext();

    useEffect(() => {
        getIncomes();
    }, [])

    return (
        <IncomesStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income: IncomesType) => {
                            const { _id, title, amount, date, category, description } = income;
                            return <Income key={_id} title={title} amount={amount} date={date} category={category} description={description} colorIndicator="var(--color-green)" id={_id} type="income" deleteItem={deleteIncome} />;
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div`
    display: flex;
    overflow: auto;

    .income-content{
        display: flex !important;
        gap: 2rem !important;
        .incomes{
            flex: 1 !important;
        }
    }
    .total-income{
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

export default Incomes;