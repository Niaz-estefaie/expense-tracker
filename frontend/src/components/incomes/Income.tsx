import styled from "styled-components";
import { dollar, calender, comment, trash } from "../../utils/Icons";
import Button from "../button/Button";
import { IncomeComponentType } from "../../types/income.type";

function Income({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    colorIndicator,
    type
}: IncomeComponentType) {
    return (
        <IncomeStyled>
            <div className="icon"></div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar()} {amount}</p>
                        <p>{calender()} {date}</p>
                        <p>{comment()} {description}</p>
                    </div>
                    <div className="btn-container">
                        <Button
                            icon={trash()}
                            bPad="1rem"
                            bRadius="5rem"
                            background="var(--primary-color)"
                            color="white"
                            // iColor="white"
                            // hColor="var(--color-green)"
                            // onClick={() => handleDelete(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`

`;

export default Income;