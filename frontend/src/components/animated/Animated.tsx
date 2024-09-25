import styled, { keyframes } from "styled-components";
import { useWindowSize } from '../../utils/useWindowSize';

const AnimatedStyled = styled.div<{ width: number; height: number }>`
  width: 70vh;
  height: 70vh;
  position: absolute;
  border-radius: 50%;
  margin-right: -37vh;
  margin-left: -37vh;
  background: linear-gradient(180deg, #f56692 0%, #F2994A 100%);
  filter: blur(400px);
  animation: ${({ width, height }) => keyframes`
     0% { transform: translate(0, 0); }
     50% { transform: translate(${width}px, ${height}px); }
     100% { transform: translate(0, 0); }
  `} 15s alternate linear infinite;
`;

function Animated() {
  const { width, height } = useWindowSize();
  return <AnimatedStyled width={width} height={height} />;
}


export default Animated;
