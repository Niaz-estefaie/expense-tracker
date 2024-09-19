import styled from 'styled-components'
import bg from './assets/images/bg.png'
import { MainLayout } from './styles/Layouts';
import Animated from './components/animated/Animated';
import Navigation from './components/navigation/Navigation';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(1);

  return (
    <>
      <AppStyled $bg={bg} className='App'>
        <Animated />
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
        </MainLayout>
      </AppStyled>
    </>
  )
}

const AppStyled = styled.div<{ $bg: string }>`
  background-image: url(${(props) => props.$bg});
  position: relative;
  height: 100vh;
`;

export default App
