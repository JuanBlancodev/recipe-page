import styled from 'styled-components'

const IngredientsContainer = styled.article`
  margin-top: 35px;
`

const IngredientsList = styled.ul`
  margin-top: 10px;
  color: var(--color-wenge-brown);
`

const Ingredients = () => {
  return (
    <IngredientsContainer>
      <h2 className="title">Ingredients</h2>
      <IngredientsList>
        
      </IngredientsList>

      <hr />
    </IngredientsContainer>
  );
};

export default Ingredients;
