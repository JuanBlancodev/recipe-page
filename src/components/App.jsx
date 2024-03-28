import styled from 'styled-components'
import Header from './container/Header'
import Preparation from './container/preparation/Preparation'
import Ingredients from './container/ingredients/Ingredients'
import Instructions from './container/instructions/Instructions'
import NutritionContainer from './container/nutrition/NutritionContainer'

const Container = styled.div`
  width: 680px;
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

const Main = styled.main`
  margin-top: 30px;

  @media (width < 700px){
    padding: 0 30px;
  }
`

const App = () => {
  return (
    <Container className='container'>
      <Header />
      <Main>
        <Preparation />
        <Ingredients />
        <Instructions />
        <NutritionContainer />
      </Main>
    </Container>
  )
}

export default App