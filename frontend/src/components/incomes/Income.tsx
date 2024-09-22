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
                            icon={trash}
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
    background: #fcf6f9;
    border: 2px solid white;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20rem;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon {
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid white;
        i {
            font-size: 2.6rem;
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h5 {

        }
    }
`;

export default Income;