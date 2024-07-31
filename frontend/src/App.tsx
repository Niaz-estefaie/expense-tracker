import styled from 'styled-components'
import bg from './assets/images/bg.png'

function App() {
  return (
    <>
      <AppStyled bg={bg} className='App'>
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
