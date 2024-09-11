import styled from 'styled-components'
import bg from './assets/images/bg.png'
import { MainLayout } from './styles/Layouts';
import Animated from './components/animated/Animated';

function App() {
  return (
    <>
      <AppStyled bg={bg} className='App'>
        <Animated />
        <MainLayout>
          <h1>Hello</h1>
        </MainLayout>
      </AppStyled>
    </>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props: any) => props.bg});
  position: relative;
`;

export default App
