import styled from "styled-components";
import { ButtonType } from "../../types/button.type";

function Button({ title, icon, onClick, background, color, bPad, bRadius }: ButtonType) {
    return (
        <ButtonStyled style={{
            background: background,
            padding: bPad,
            borderRadius: bRadius,
            color: color
        }} onClick={onClick}>
            {icon()}
            {title}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
`;

export default Button;