import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../form/Form";

function Incomes() {
    // const {addIncome} = useGlobalContext();

    return (
        <IncomesStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className="income-contetnt">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">

                    </div>
                </div>
            </InnerLayout>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div`

`;

export default Incomes;