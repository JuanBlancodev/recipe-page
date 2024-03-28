import styled from 'styled-components'
import useGlobalContext from '../../../hooks/useGlobalContext'
import Ingredient from './Ingredient';

const IngredientsContainer = styled.article`
  margin-top: 35px;
`

const IngredientsList = styled.ul`
  margin-top: 10px;
  color: var(--color-wenge-brown);
`

const Ingredients = () => {
  const { ingredients } = useGlobalContext()

  if(ingredients === undefined){
    return null
  }

  return (
    <IngredientsContainer>
      <h2 className="title">Ingredients</h2>
      <IngredientsList>
        { ingredients.map((item, index) => (
          <Ingredient ingredient={item} key={index}  />
        )) }
      </IngredientsList>

      <hr />
    </IngredientsContainer>
  );
};

export default Ingredients;
