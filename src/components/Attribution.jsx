import styled from 'styled-components'
import { GITHUB_LINK } from '../config/cfg'

const AttributionContainer = styled.div`
  text-align: center;
  color: gray;
  font-family: Arial, Helvetica, sans-serif;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 7px;

  margin-top: 30px;
  margin-bottom: 7px;
`

const AttributionLink = styled.a`
  color: rgb(54, 88, 107);
  font-style: italic;
`

const Attribution = () => {
  return (
    <AttributionContainer>
      <div>
        Challenge by <AttributionLink href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</AttributionLink>. 
      </div>
      <div>
        Coded by <AttributionLink href={GITHUB_LINK} target="_blank">Juan Blanco dev</AttributionLink>.
      </div>
    </AttributionContainer>
  )
}

export default Attribution