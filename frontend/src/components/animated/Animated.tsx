import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from '../../utils/useWindowSize';

function Animated() {
    const { width, height } = useWindowSize();

    console.log(width, height);
    

    const moveAnimation = keyframes`
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(${width/1.2}px, ${height/1.5}px);
        }
        100% {
            transform: translate(0, 0);
        }
    `;

    const AnimatedStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-right: -37vh;
        margin-left: -37vh;
        background: linear-gradient(180deg, #f56692 0%, #F2994A 100%);
        filter: blur(400px);
        animation: ${moveAnimation} 15s alternate linear infinite;
    `;

    return <AnimatedStyled />;
}

export default Animated;
