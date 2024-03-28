import styled from 'styled-components'
import Header from './container/Header'

const Container = styled.div`
  width: 680px;
  height: 200px;
  max-width: 1440px;
  min-height: 700px;
  padding: 30px;
  margin: 100px auto;
  background-color: var(--color-white); 
  border-radius: 15px;

  @media (width < 700px){
    margin: 0;
    padding: 0;
    max-width: 100vw;
  }
`

const App = () => {
  return (
    <Container className='container'>
      <Header />
    </Container>
  )
}

export default App