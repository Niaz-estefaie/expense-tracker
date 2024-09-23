import { ChangeEvent, FormEvent, useState } from "react";
import DatePicker from "react-date-picker";
import styled from "styled-components";
import { FormState } from "../../types/form.type";
import { useGlobalContext } from "../../context/globalContext";
import "react-date-picker/dist/DatePicker.css";
import Button from "../button/Button";
import { plus } from "../../utils/Icons";

function IncomeForm() {
    const { addIncome } = useGlobalContext();
    const [inputState, setInputState] = useState<FormState>({
        title: '',
        amount: '',
        date: null,
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = (name: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setInputState({ ...inputState, [name]: event.target.value });
    };

    const handleDateChange = (selectedDate: any) => {
        if (Array.isArray(selectedDate)) {
            setInputState({ ...inputState, date: selectedDate[0] });
        } else {
            setInputState({ ...inputState, date: selectedDate });
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addIncome(inputState);
        setInputState({
            title: '',
            amount: '',
            date: null,
            category: '',
            description: '',
        })
    };

    return (
        <IncomeFormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input
                    type="text"
                    value={title}
                    name="title"
                    placeholder="Input Your Salary"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input
                    type="text"
                    value={amount}
                    name="amount"
                    placeholder="Input The Amount"
                    onChange={handleInput('amount')}
                />
            </div>
            <div className="input-control">
                <DatePicker
                    id="date-picker-input"
                    onChange={handleDateChange}
                    value={date}
                    format="dd/MM/yyyy"
                />
            </div>
            <div className="input-control selects">
                <select
                    value={category}
                    name="category"
                    id="category-input"
                    onChange={handleInput('category')}
                >
                    <option value="" disabled>Select an Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investment">Investment</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank</option>
                    <option value="youtube">Youtube</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea
                    value={description}
                    name="description"
                    placeholder="Input Your Description"
                    onChange={handleInput('description')}
                />
            </div>
            <div className="submit-btn">
                <Button
                    title="Add Income"
                    icon={plus}
                    bPad="0.8rem 1.6rem"
                    bRadius="5px"
                    background="var(--color-accent)"
                    color="white"
                    onClick={handleSubmit}
                />
            </div>
        </IncomeFormStyled>
    );
}

const IncomeFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        border: 2px solid white;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder {
            color: rgba(34, 34, 96, 0.4);
        }
    }

    .react-date-picker__wrapper {
        border: none !important;
    }

    .selects {
        display: flex;
        justify-content: flex-end;
        select {
            width: 100%;
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active {
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn {
        button {
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover {
                background: var(--color-green);
            }
        }
    }
`;

export default IncomeForm;
