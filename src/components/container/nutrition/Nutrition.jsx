import styled from 'styled-components'
import PropTypes from 'prop-types'

const NutritionItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 15px 25px;

  border-bottom: 2px solid var(--color-light-grey);

  &:last-child{
    border: none;
  }
`

const NutritionProperty = styled.span`
  color: var(--color-wenge-brown);
`

const NutritionValue = styled.span`
  color: var(--color-nutmeg);
  font-weight: bold;
`

const Nutrition = ({ info: { property, value } }) => {
  return (
    <NutritionItem>
      <NutritionProperty>{ property }</NutritionProperty>
      <NutritionValue>{ value }</NutritionValue>
    </NutritionItem>
  )
}

Nutrition.propTypes = { info: PropTypes.object }

export default Nutrition