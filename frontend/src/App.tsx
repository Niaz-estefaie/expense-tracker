import styled from 'styled-components'
import bg from './assets/images/bg.png'
import { MainLayout } from './styles/Layouts';
import Animated from './components/animated/Animated';
import Navigation from './components/navigation/Navigation';
import { useMemo, useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Incomes from './components/incomes/Incomes';
import Expenses from './components/expenses/Expenses';
import { useGlobalContext } from './context/globalContext';

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);
  

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />

      default:
        return <Dashboard />
    }
  }

  const animationMemo = useMemo(() => {
    return <Animated />
  }, []);

  return (
    <>
      <AppStyled $bg={bg} className='App'>
        {animationMemo}
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>
            {displayData()}
          </main>
        </MainLayout>
      </AppStyled>
    </>
  )
}

const AppStyled = styled.div<{ $bg: string }>`
  background-image: url(${(props) => props.$bg});
  position: relative;
  height: 100vh;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid white;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App
