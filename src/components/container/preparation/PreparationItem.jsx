import PropTypes from 'prop-types'
import styled from 'styled-components'

const SpanBold = styled.span`
  font-weight: 600;
`

const PreparationItem = ({ info: { title, text } }) => {
  return (
    <li>
      <SpanBold>{ title }: </SpanBold>
      { text }
    </li>
  )
}

PreparationItem.propTypes = { info: PropTypes.object }

export default PreparationItem