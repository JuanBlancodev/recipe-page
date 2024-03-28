import styled from 'styled-components'
import useGlobalContext from '../../../hooks/useGlobalContext'
import PreparationItem from './PreparationItem'

const PreparationContainer = styled.article`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--color-eggshell);
`

const PreparationTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-dark-raspberry);
  font-family: var(--font-outfit);
`

const PreparationList = styled.ul`
  margin-top: 10px;
  color: var(--color-wenge-brown);
`

const Preparation = () => {
  const { preparation } = useGlobalContext()

  if(preparation === undefined){
    return null
  }

  return (
    <PreparationContainer>
      <PreparationTitle>Preparation time</PreparationTitle>
      <PreparationList>
        { preparation.map((item, index) => (
          <PreparationItem info={item} key={index} />
        )) }
      </PreparationList>
    </PreparationContainer>
  );
};

export default Preparation;
