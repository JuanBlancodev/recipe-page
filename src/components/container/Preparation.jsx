import styled from 'styled-components'

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

const SpanBold = styled.span`
  font-weight: 600;
`

const Preparation = () => {
  return (
    <PreparationContainer>
      <PreparationTitle>Preparation time</PreparationTitle>
      <PreparationList>
        <li>
          <SpanBold>Total: </SpanBold>
          Approximately 10 minutes
        </li>
        <li>
          <SpanBold>Preparation: </SpanBold>
          5 minutes
        </li>
        <li>
          <SpanBold>Cooking: </SpanBold>
          5 minutes
        </li>
      </PreparationList>
    </PreparationContainer>
  );
};

export default Preparation;
