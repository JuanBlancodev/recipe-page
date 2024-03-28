import styled from 'styled-components'
import PropTypes from 'prop-types'

const IngredientsElement = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const Ingredient = ({ ingredient }) => {
  return (
    <IngredientsElement>
      { ingredient }
    </IngredientsElement>
  )
}

Ingredient.propTypes = { ingredient: PropTypes.string }

export default Ingredient