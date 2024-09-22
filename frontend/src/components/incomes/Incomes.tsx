import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../form/Form";
import { useEffect } from "react";
import { IncomesType } from "../../types/income.type";
import Income from "./Income";

function Incomes() {
    const { getIncomes, incomes } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        console.log(incomes);
        
    }, [incomes])

    return (
        <IncomesStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className="income-contetnt">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income: IncomesType) => {
                            const { _id, title, amount, date, category, description } = income;
                            return <Income />

                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div`

`;

export default Incomes;