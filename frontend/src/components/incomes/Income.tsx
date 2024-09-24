import styled from "styled-components";
import { dollar, calender, comment, trash, money, freelance, stocks, users, bitcoin, card, yt, piggy, book, food, medical, tv, takeaway, clothing, circle } from "../../utils/Icons";
import Button from "../button/Button";
import { IncomeComponentType } from "../../types/income.type";
import { formatDate } from "../../utils/dateFormat";

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
    const categoryIcon = () => {
        switch (category) {
            case 'salary':
                return money();
            case 'freelancing':
                return freelance();
            case 'investment':
                return stocks();
            case 'stocks':
                return users()
            case 'bitcoin':
                return bitcoin();
            case 'bank':
                return card();
            case 'youtube':
                return yt();
            case 'other':
                return piggy();
            default:
                return '';
        }
    };

    const expenseCategoryIcon = () => {
        switch (category) {
            case 'education':
                return book();
            case 'groceries':
                return food();
            case 'health':
                return medical();
            case 'subscriptions':
                return tv()
            case 'takeaways':
                return takeaway();
            case 'clothing':
                return clothing();
            case 'travelling':
                return freelance();
            case 'other':
                return circle();
            default:
                return '';
        }
    };

    const handleDelete = (id: string) => {
        deleteItem(id);
    };
    return (
        <IncomeStyled $indicator={colorIndicator}>
            <div className="icon">
                {type === 'expense' ? expenseCategoryIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar()} {amount}</p>
                        <p>{calender()} {formatDate(date)}</p>
                        <p>{comment()} {description}</p>
                    </div>
                    <div className="btn-container">
                        <Button
                            icon={trash}
                            bPad="1rem"
                            bRadius="5rem"
                            background="var(--primary-color)"
                            color="white"
                            onClick={() => handleDelete(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div<{ $indicator: string | undefined }>`
    border-radius: 5rem !important;
    background: #fcf6f9;
    border: 2px solid white;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
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
        gap: 0.2rem;
        h5 {
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before {
                content: "";
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
                background: ${(props) => props.$indicator};
            }
        }

        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text {
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }
`;

export default Income;